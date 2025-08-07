"use client";

import { useEffect, useState } from "react";
import priceClient from "../lib/priceClients";
import { SubgraphResponse } from "@/backend/helper/type";

export function usePrices() {
  const [data, setData] = useState<SubgraphResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const result = await priceClient.fetchAllPrices();
        setData(result);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetch();

    // Optional: refresh every 60s
    const interval = setInterval(fetch, 60000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
}
