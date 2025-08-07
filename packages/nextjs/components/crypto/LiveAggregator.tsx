"use client";

import { useEffect, useState } from "react";
import { PriceService } from "@/backend/priceService";
import { SubgraphResponse } from "@/backend/helper/type";
import ProtocolSection from "./ProtocolSection";

const priceService = new PriceService();

export default function LiveAggregator() {
  const [data, setData] = useState<SubgraphResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(60);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [selectedProtocol, setSelectedProtocol] = useState<string>("all");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await priceService.fetchAllPrices();
      setData(res);
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Failed to fetch prices", err);
    } finally {
      setLoading(false);
      setCountdown(60);
    }
  };

  useEffect(() => {
    fetchData();
    const refreshInterval = setInterval(fetchData, 60000);
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 60));
    }, 1000);

    return () => {
      clearInterval(refreshInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  // Extract unique protocol names
  const protocols = Array.from(new Set(data.map((d) => d.protocol)));
  const filteredData =
    selectedProtocol === "all"
      ? data
      : data.filter((d) => d.protocol === selectedProtocol);

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 text-base-content">
      <header className="mb-8 space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
          Live DeFi Price Aggregator
        </h1>

        <p className="text-sm text-base-content/70">
          Pulling live data from{" "}
          <span className="font-semibold">{data.length}</span> protocols.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
          <p className="text-xs text-base-content/60">
            Last updated:{" "}
            <span className="font-medium">{lastUpdate}</span> • Refresh in{" "}
            <span className="font-medium">{countdown}s</span>
          </p>

          <div className="flex gap-2">
            <select
              className="border border-base-300 bg-base-100 text-sm rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedProtocol}
              onChange={(e) => setSelectedProtocol(e.target.value)}
            >
              <option value="all">All Protocols</option>
              {protocols.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>

            <button
              onClick={fetchData}
              disabled={loading}
              className={`inline-flex items-center px-4 py-1.5 rounded-md text-sm font-medium transition ${
                loading
                  ? "bg-base-300 cursor-not-allowed text-base-content/50"
                  : "bg-primary text-primary-content hover:brightness-110"
              }`}
            >
              {loading ? "Refreshing..." : "Refresh Now"}
            </button>
          </div>
        </div>
      </header>

      <section className="space-y-8">
        {loading ? (
          <div className="text-center text-base-content/60 animate-pulse">
            Fetching live price data from The Graph...
          </div>
        ) : filteredData.length > 0 ? (
          filteredData.map((protocol) => (
            <ProtocolSection key={protocol.protocol} protocol={protocol} />
          ))
        ) : (
          <div className="text-center text-base-content/50">
            No data available for this protocol.
          </div>
        )}
      </section>
    </main>
  );
}
