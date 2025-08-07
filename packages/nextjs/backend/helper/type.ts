export interface TokenPrice {
  id: string;
  symbol: string;
  name: string;
  priceUSD: string;
  decimals: number;
  protocol: string;
  marketCap?: number;
  volume24h?: number;
  priceChange24h?: number;
  lastUpdate?: string;
}

export interface PairPrice {
  id: string;
  token0Symbol: string;
  token1Symbol: string;
  price: string;
  liquidity: string;
  volume24h: string;
  protocol: string;
  lastUpdate: string;
}

export interface SubgraphResponse {
  protocol: string;
  tokens: TokenPrice[];
  pairs?: PairPrice[];
  error?: string;
}
