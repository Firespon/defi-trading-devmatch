// Using only tokens that are guaranteed to have prices on CoinGecko
export const PROTOCOL_CONFIGS = {
  // Major DEXs - Top tokens only
  UNISWAP_V3: {
    name: 'Uniswap V3',
    tokens: [
      'ethereum', 'uniswap', 'chainlink', 'wrapped-bitcoin', 'dai', 'usdc', 'usdt', 'maker',
      'aave', 'compound-governance-token', 'matic-network', 'shiba-inu'
    ]
  },
  
  SUSHISWAP: {
    name: 'SushiSwap',
    tokens: [
      'sushi', 'ethereum', 'wrapped-bitcoin', 'matic-network', 'avalanche-2',
      'fantom', 'arbitrum', 'optimism'
    ]
  },
  
  PANCAKESWAP: {
    name: 'PancakeSwap',
    tokens: [
      'pancakeswap-token', 'binancecoin', 'ethereum', 'wrapped-bitcoin',
      'cardano', 'ripple', 'polkadot', 'dogecoin'
    ]
  },
  
  CURVE: {
    name: 'Curve Finance',
    tokens: [
      'curve-dao-token', 'convex-finance', 'frax', 'frax-share',
      'ethereum', 'wrapped-bitcoin', 'usdc', 'dai'
    ]
  },
  
  BALANCER: {
    name: 'Balancer',
    tokens: [
      'balancer', 'ethereum', 'wrapped-bitcoin', 'dai', 'usdc',
      'aave', 'matic-network'
    ]
  },
  
  // Lending Protocols
  AAVE_V3: {
    name: 'Aave V3',
    tokens: [
      'aave', 'ethereum', 'wrapped-bitcoin', 'usdc', 'dai', 'usdt', 'chainlink',
      'matic-network', 'avalanche-2'
    ]
  },
  
  COMPOUND: {
    name: 'Compound',
    tokens: [
      'compound-governance-token', 'ethereum', 'wrapped-bitcoin', 'usdc', 'dai', 'usdt',
      'uniswap', 'chainlink'
    ]
  },
  
  MAKER: {
    name: 'MakerDAO',
    tokens: [
      'maker', 'dai', 'ethereum', 'wrapped-bitcoin', 'usdc',
      'matic-network', 'chainlink'
    ]
  },
  
  // Layer 2 DEXs
  QUICKSWAP: {
    name: 'QuickSwap',
    tokens: [
      'quickswap', 'matic-network', 'ethereum', 'wrapped-bitcoin', 'usdc', 'dai',
      'chainlink', 'aave'
    ]
  },
  
  TRADERJOE: {
    name: 'TraderJoe',
    tokens: [
      'joe', 'avalanche-2', 'wrapped-bitcoin', 'ethereum', 'usdc', 'dai', 'usdt',
      'chainlink'
    ]
  },
  
  // Derivatives
  GMX: {
    name: 'GMX',
    tokens: [
      'gmx', 'arbitrum', 'ethereum', 'wrapped-bitcoin', 'usdc', 'dai',
      'frax', 'chainlink'
    ]
  },
  
  DYDX: {
    name: 'dYdX',
    tokens: [
      'dydx', 'ethereum', 'wrapped-bitcoin', 'usdc', 'dai', 'chainlink',
      'aave', 'uniswap'
    ]
  },
  
  // Other Popular Protocols
  SYNTHETIX: {
    name: 'Synthetix',
    tokens: [
      'synthetix-network-token', 'ethereum', 'wrapped-bitcoin', 'chainlink',
      'optimism', 'usdc', 'dai'
    ]
  },
  
  ONEINCH: {
    name: '1inch',
    tokens: [
      '1inch', 'ethereum', 'wrapped-bitcoin', 'usdc', 'dai', 'usdt', 'matic-network',
      'binancecoin'
    ]
  },
  
  KYBERSWAP: {
    name: 'KyberSwap',
    tokens: [
      'kyber-network-crystal', 'ethereum', 'wrapped-bitcoin', 'usdc', 'dai', 'usdt',
      'matic-network'
    ]
  }
};

// Get all unique tokens
export function getAllUniqueTokens(): string[] {
  const allTokens = new Set<string>();
  
  Object.values(PROTOCOL_CONFIGS).forEach(protocol => {
    protocol.tokens.forEach(token => allTokens.add(token));
  });
  
  return Array.from(allTokens);
}
