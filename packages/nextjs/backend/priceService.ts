import axios from 'axios';
import { PROTOCOL_CONFIGS, getAllUniqueTokens } from './helper/protocols';
import { TokenPrice, SubgraphResponse, PairPrice } from './helper/type';
import { SubgraphService } from './helper/subgraphService';

export class PriceService {
  private coingeckoUrl = 'https://api.coingecko.com/api/v3/simple/price';
  private tokenCache: Map<string, any> = new Map();
  private pairsCache: Map<string, PairPrice[]> = new Map();
  private lastFetchTime: number = 0;
  private readonly CACHE_DURATION = 30000; // 30 seconds cache
  private subgraphService: SubgraphService;

  constructor() {
    this.subgraphService = new SubgraphService();
  }

  async fetchTokenPrices(tokenIds: string[]): Promise<Map<string, any>> {
    try {
      const now = Date.now();

      // Use cache if recent
      if (now - this.lastFetchTime < this.CACHE_DURATION && this.tokenCache.size > 0) {
        console.log('Using cached prices...');
        return this.tokenCache;
      }

      console.log(`Fetching fresh prices for ${tokenIds.length} tokens...`);

      // Fetch all at once (CoinGecko allows up to 250 ids)
      const ids = tokenIds.join(',');

      const response = await axios.get(this.coingeckoUrl, {
        params: {
          ids: ids,
          vs_currencies: 'usd',
          include_market_cap: true,
          include_24hr_vol: true,
          include_24hr_change: true
        },
        timeout: 10000 // 10 second timeout
      });

      // Clear old cache and update
      this.tokenCache.clear();
      Object.entries(response.data).forEach(([id, data]) => {
        this.tokenCache.set(id, data);
      });

      this.lastFetchTime = now;
      console.log(`Successfully fetched ${this.tokenCache.size} token prices`);

      return this.tokenCache;
    } catch (error) {
      console.error('Error fetching prices from CoinGecko:', error);
      // Return cached data if available
      if (this.tokenCache.size > 0) {
        console.log('Using cached data due to error');
        return this.tokenCache;
      }
      throw error;
    }
  }

  async fetchProtocolPrices(protocolName: string, tokenIds: string[]): Promise<SubgraphResponse> {
    try {
      const tokens: TokenPrice[] = [];

      for (const tokenId of tokenIds) {
        const priceData = this.tokenCache.get(tokenId);
        if (priceData && priceData.usd !== undefined) {
          tokens.push({
            id: tokenId,
            symbol: tokenId.toUpperCase().replace(/-/g, '').slice(0, 6),
            name: this.formatTokenName(tokenId),
            priceUSD: priceData.usd.toString(),
            decimals: 18,
            protocol: protocolName,
            marketCap: priceData.usd_market_cap || 0,
            volume24h: priceData.usd_24h_vol || 0,
            priceChange24h: priceData.usd_24h_change || 0,
            lastUpdate: new Date().toISOString()
          });
        }
      }

      // Get pairs for DEX protocols
      const pairs = this.pairsCache.get(protocolName) || [];

      return {
        protocol: protocolName,
        tokens: tokens,
        pairs: pairs.length > 0 ? pairs : undefined
      };
    } catch (error) {
      console.error(`Error processing ${protocolName} prices:`, error);
      return {
        protocol: protocolName,
        tokens: [],
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private formatTokenName(tokenId: string): string {
    const nameMap: { [key: string]: string } = {
      'wrapped-bitcoin': 'Wrapped Bitcoin',
      'ethereum': 'Ethereum',
      'binancecoin': 'BNB',
      'matic-network': 'Polygon',
      'avalanche-2': 'Avalanche',
      'compound-governance-token': 'Compound',
      'synthetix-network-token': 'Synthetix',
      'kyber-network-crystal': 'Kyber Network'
    };

    return nameMap[tokenId] || tokenId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  async fetchAllPrices(): Promise<SubgraphResponse[]> {
    try {
      // Get all unique tokens
      const allTokens = getAllUniqueTokens();
      console.log(`\n=== FETCHING BLOCKCHAIN PRICES ===`);
      console.log(`Time: ${new Date().toLocaleTimeString()}`);
      console.log(`Total unique tokens: ${allTokens.length}`);

      // Fetch all token prices at once
      await this.fetchTokenPrices(allTokens);

      // Fetch DEX pairs from mainnet subgraphs
      const dexPairs = await this.subgraphService.fetchAllDexPairs();

      // Update pairs cache
      this.pairsCache = dexPairs;

      // Process each protocol
      const promises = Object.entries(PROTOCOL_CONFIGS).map(([key, config]) =>
        this.fetchProtocolPrices(config.name, config.tokens)
      );

      const results = await Promise.all(promises);

      // Add DEX-specific results with pairs
      dexPairs.forEach((pairs, protocolName) => {
        const existingResult = results.find(r => r.protocol === protocolName);
        if (existingResult) {
          existingResult.pairs = pairs;
        } else {
          results.push({
            protocol: protocolName,
            tokens: [],
            pairs: pairs
          });
        }
      });

      // Filter out empty results
      const validResults = results.filter(response =>
        response.tokens.length > 0 || (response.pairs && response.pairs.length > 0)
      );

      console.log(`Successfully processed ${validResults.length} protocols`);

      return validResults;
    } catch (error) {
      console.error('Error in fetchAllPrices:', error);
      return [];
    }
  }
}
