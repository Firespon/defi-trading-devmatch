import { PairPrice } from "@/backend/helper/type";

export default function PairCard({ pair }: { pair: PairPrice }) {
  const price = parseFloat(pair.price);
  const liquidity = parseFloat(pair.liquidity);
  const volume = parseFloat(pair.volume24h);

  const formatNumber = (num: number): string => {
    if (isNaN(num)) return "$0.00";
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const formattedPrice =
    price > 0.01 ? `$${price.toFixed(4)}` : `$${price.toExponential(2)}`;
  const lastUpdated = new Date(pair.lastUpdate).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 shadow-md transition hover:shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          {pair.token0Symbol}/{pair.token1Symbol}
        </h3>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {pair.protocol}
        </span>
      </div>

      <div className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
        {formattedPrice}
      </div>

      <div className="text-sm text-zinc-700 dark:text-zinc-300 mb-1">
        Liquidity: <span className="font-medium">{formatNumber(liquidity)}</span>
      </div>

      <div className="text-sm text-zinc-700 dark:text-zinc-300 mb-1">
        Vol (24h): <span className="font-medium">{formatNumber(volume)}</span>
      </div>

      <div className="text-xs text-zinc-500 dark:text-zinc-400">
        Updated: {lastUpdated}
      </div>
    </div>
  );
}
