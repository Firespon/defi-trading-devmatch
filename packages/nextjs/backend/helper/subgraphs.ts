export const SUBGRAPH_ENDPOINTS = {
  // Aave V3 on multiple chains
  AAVE_V3_ETHEREUM: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3',
  AAVE_V3_POLYGON: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-polygon',
  AAVE_V3_ARBITRUM: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-arbitrum',
  AAVE_V3_OPTIMISM: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v3-optimism',
  
  // Compound V3
  COMPOUND_V3: 'https://api.thegraph.com/subgraphs/name/compound-finance/compound-v3',
  
  // Uniswap V3
  UNISWAP_V3: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
  
  // Curve
  CURVE: 'https://api.thegraph.com/subgraphs/name/messari/curve-finance-ethereum',
  
  // Balancer V2
  BALANCER_V2: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
};

export const QUERIES = {
  AAVE_V3_RESERVES: `
    query GetAaveReserves {
      reserves(first: 100, orderBy: totalLiquidity, orderDirection: desc) {
        id
        symbol
        name
        decimals
        price {
          priceInEth
        }
        liquidityRate
        variableBorrowRate
        totalLiquidity
        totalDebt
      }
    }
  `,
  
  COMPOUND_V3_MARKETS: `
    query GetCompoundMarkets {
      markets(first: 50) {
        id
        baseToken {
          id
          symbol
          name
          decimals
          lastPriceUSD
        }
        supplyRate
        borrowRate
        totalSupply
        totalBorrow
      }
    }
  `,
  
  UNISWAP_V3_TOKENS: `
    query GetUniswapTokens {
      tokens(first: 100, orderBy: totalValueLockedUSD, orderDirection: desc) {
        id
        symbol
        name
        decimals
        derivedETH
        totalValueLockedUSD
        volumeUSD
      }
      bundle(id: "1") {
        ethPriceUSD
      }
    }
  `,
  
  CURVE_POOLS: `
    query GetCurvePools {
      liquidityPools(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc) {
        id
        name
        symbol
        inputTokens {
          id
          symbol
          name
          decimals
          lastPriceUSD
        }
        totalValueLockedUSD
      }
    }
  `,
  
  BALANCER_POOLS: `
    query GetBalancerPools {
      pools(first: 50, orderBy: totalLiquidity, orderDirection: desc) {
        id
        name
        symbol
        tokens {
          symbol
          name
          decimals
          balance
          priceRate
        }
        totalLiquidity
      }
    }
  `
};
