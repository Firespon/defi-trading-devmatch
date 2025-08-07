import { TokenPrice } from "@/backend/helper/type";

export default function TokenCard({ token }: { token: TokenPrice }) {
  const price = parseFloat(token.priceUSD);
  const formattedPrice =
    price > 0.01 ? `$${price.toFixed(2)}` : `$${price.toExponential(4)}`;

  const priceChange = token.priceChange24h?.toFixed(2) ?? "0.00";
  const isPositive = token.priceChange24h && token.priceChange24h > 0;
  const changeClass = isPositive ? "text-green-500" : "text-red-500";
  const changeSymbol = isPositive ? "▲" : "▼";

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toFixed(2)}`;
  };

  return (
    <div className="bg-base-200 rounded-xl shadow-md hover:shadow-lg transition p-4 w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{token.name}</h3>
        <span className="badge badge-outline text-xs">{token.protocol}</span>
      </div>

      {/* Symbol */}
      <div className="text-sm text-base-content/60 mb-1 uppercase tracking-wider">
        {token.symbol}
      </div>

      {/* Price */}
      <div className="text-2xl font-bold mb-1">{formattedPrice}</div>

      {/* Price change */}
      <div className={`text-sm font-medium ${changeClass} mb-2`}>
        {changeSymbol} {priceChange}%
      </div>

      {/* Market data */}
      <div className="text-xs text-base-content/70 space-y-1">
        {token.marketCap && (
          <div>MCap: {formatNumber(token.marketCap)}</div>
        )}
        {token.volume24h && (
          <div>Vol 24h: {formatNumber(token.volume24h)}</div>
        )}
      </div>

      {/* Timestamp */}
      <div className="text-[10px] text-base-content/50 mt-3">
        Updated: {new Date(token.lastUpdate || "").toLocaleTimeString()}
      </div>
    </div>
  );
}
