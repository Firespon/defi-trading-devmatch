import { PairPrice } from "@/backend/helper/type";

export default function PairCard({ pair }: { pair: PairPrice }) {
  const price = parseFloat(pair.price);
  const liquidity = parseFloat(pair.liquidity);
  const volume = parseFloat(pair.volume24h);

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toFixed(2)}`;
  };

  return (
    <div className="pair-card">
      <div className="pair-header">
        <h3 className="pair-symbol">{pair.token0Symbol}/{pair.token1Symbol}</h3>
        <span className="pair-protocol">{pair.protocol}</span>
      </div>
      <div className="pair-price">{price > 0.01 ? price.toFixed(4) : price.toExponential(4)}</div>
      <div className="pair-liquidity">Liquidity: {formatNumber(liquidity)}</div>
      <div className="pair-volume">Vol 24h: {formatNumber(volume)}</div>
      <div className="last-update">Updated: {new Date(pair.lastUpdate).toLocaleTimeString()}</div>
    </div>
  );
}
