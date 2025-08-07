import axios from 'axios';
import { PairPrice } from './type';

interface SubgraphPool {
  id: string;
  token0: {
    symbol: string;
    decimals: string;
  };
  token1: {
    symbol: string;
    decimals: string;
  };
  token0Price: string;
  token1Price: string;
  totalValueLockedUSD: string;
  volumeUSD: string;
}

export class SubgraphService {
  private readonly SUBGRAPH_URLS = {
    UNISWAP_V3: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
    UNISWAP_V2: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
    SUSHISWAP: 'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
    PANCAKESWAP: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v2',
    BALANCER: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
    CURVE: 'https://api.thegraph.com/subgraphs/name/messari/curve-finance-ethereum',
  };

  private readonly QUERIES = {
    UNISWAP_V3: `
      query GetTopPools {
        pools(first: 20, orderBy: totalValueLockedUSD, orderDirection: desc) {
          id
          token0 {
            symbol
            decimals
          }
          token1 {
            symbol
            decimals
          }
          token0Price
          token1Price
          totalValueLockedUSD
          volumeUSD
        }
      }
    `,
    UNISWAP_V2: `
      query GetTopPairs {
        pairs(first: 20, orderBy: reserveUSD, orderDirection: desc) {
          id
          token0 {
            symbol
            decimals
          }
          token1 {
            symbol
            decimals
          }
          token0Price
          token1Price
          reserveUSD
          volumeUSD
        }
      }
    `,
    SUSHISWAP: `
      query GetTopPairs {
        pairs(first: 20, orderBy: reserveUSD, orderDirection: desc) {
          id
          token0 {
            symbol
            decimals
          }
          token1 {
            symbol
            decimals
          }
          token0Price
          token1Price
          reserveUSD
          volumeUSD
        }
      }
    `,
    BALANCER: `
      query GetTopPools {
        pools(first: 20, orderBy: totalLiquidity, orderDirection: desc) {
          id
          tokens {
            symbol
            decimals
            balance
            priceRate
          }
          totalLiquidity
          totalSwapVolume
        }
      }
    `
  };

  async fetchPairsFromSubgraph(protocol: string, url: string, query: string): Promise<PairPrice[]> {
    try {
      console.log(`Fetching ${protocol} pairs from mainnet subgraph...`);
      
      const response = await axios.post(
        url,
        { query },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000
        }
      );

      if (!response.data || !response.data.data) {
        console.error(`No data from ${protocol} subgraph`);
        return [];
      }

      const pools = response.data.data.pools || response.data.data.pairs || [];
      const pairs: PairPrice[] = [];

      pools.slice(0, 15).forEach((pool: any) => {
        if (pool.token0 && pool.token1) {
          const price = parseFloat(pool.token0Price || '0');
          const formattedPrice = price > 0 ? price.toFixed(4) : '0';
          
          pairs.push({
            id: pool.id,
            token0Symbol: pool.token0.symbol || 'UNKNOWN',
            token1Symbol: pool.token1.symbol || 'UNKNOWN',
            price: formattedPrice,
            liquidity: pool.totalValueLockedUSD || pool.reserveUSD || pool.totalLiquidity || '0',
            volume24h: pool.volumeUSD || pool.totalSwapVolume || '0',
            protocol: protocol,
            lastUpdate: new Date().toISOString()
          });
        }
      });

      console.log(`✓ Fetched ${pairs.length} pairs from ${protocol}`);
      return pairs;
    } catch (error) {
      console.error(`Error fetching ${protocol} pairs:`, error);
      return [];
    }
  }

  async fetchAllDexPairs(): Promise<Map<string, PairPrice[]>> {
    const pairsMap = new Map<string, PairPrice[]>();
    
    console.log('\n=== FETCHING MAINNET DEX PAIRS VIA SUBGRAPH ===');
    console.log(`Time: ${new Date().toLocaleTimeString()}`);

    // Fetch from each DEX in parallel
    const promises = [
      this.fetchPairsFromSubgraph('Uniswap V3', this.SUBGRAPH_URLS.UNISWAP_V3, this.QUERIES.UNISWAP_V3),
      this.fetchPairsFromSubgraph('Uniswap V2', this.SUBGRAPH_URLS.UNISWAP_V2, this.QUERIES.UNISWAP_V2),
      this.fetchPairsFromSubgraph('SushiSwap', this.SUBGRAPH_URLS.SUSHISWAP, this.QUERIES.SUSHISWAP),
      // Add more DEXs as needed
    ];

    const results = await Promise.allSettled(promises);
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value.length > 0) {
        const protocol = ['Uniswap V3', 'Uniswap V2', 'SushiSwap'][index];
        pairsMap.set(protocol, result.value);
        
        // Log top pairs to console
        console.log(`\n${protocol} Top Pairs:`);
        result.value.slice(0, 5).forEach(pair => {
          console.log(`  ${pair.token0Symbol}/${pair.token1Symbol} = ${pair.price}`);
        });
      }
    });

    console.log(`\nTotal DEXs fetched: ${pairsMap.size}`);
    console.log(`Total pairs: ${Array.from(pairsMap.values()).flat().length}`);
    
    return pairsMap;
  }
}
