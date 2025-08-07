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
      setCountdown(prev => (prev > 0 ? prev - 1 : 60));
    }, 1000);
    return () => {
      clearInterval(refreshInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Live DeFi Price Aggregator</h1>
        <p className="text-gray-500">
          Live blockchain prices from {data.length} protocols • Last updated: {lastUpdate} • Next refresh in {countdown}s
        </p>
        <button
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={fetchData}
        >
          Refresh Now
        </button>
      </header>

      {loading ? (
        <p className="text-gray-500">Fetching data...</p>
      ) : (
        <div className="space-y-8">
          {data.map(protocol => (
            <ProtocolSection key={protocol.protocol} protocol={protocol} />
          ))}
        </div>
      )}
    </main>
  );
}
