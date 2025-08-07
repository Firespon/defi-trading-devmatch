import { SubgraphResponse } from "@/backend/helper/type";
import TokenCard from "./TokenCard";
import PairCard from "./PairCard";

export default function ProtocolSection({ protocol }: { protocol: SubgraphResponse }) {
  return (
    <section className="protocol-section space-y-4">
      <h2 className="text-xl font-semibold">{protocol.protocol}</h2>

      {protocol.tokens.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {protocol.tokens.map(token => (
            <TokenCard key={token.id + token.protocol} token={token} />
          ))}
        </div>
      )}

      {protocol.pairs && protocol.pairs.length > 0 && (
        <div>
          <h3 className="text-lg mt-4 font-medium">Trading Pairs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {protocol.pairs.map(pair => (
              <PairCard key={pair.id} pair={pair} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
