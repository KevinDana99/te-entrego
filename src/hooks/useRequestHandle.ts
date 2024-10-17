import { useEffect, useState } from "react";
import { UsePollingType } from "./types";
import * as origins from "./mocks/origins.json";
const TIME_INTERVAL_REQUEST = 8000;
const DESTINATION_ENDPOINT = ``;
const INITIAL_ENDPOINT = ``;

const useRequestHandle = ({
  time = TIME_INTERVAL_REQUEST,
  initial = INITIAL_ENDPOINT,
  destination = DESTINATION_ENDPOINT,
  shopName,
}: UsePollingType) => {
  const [partialData, setPartialData] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any[]>([]);

  const selectedShop = origins[`${shopName}`];
  const origin = selectedShop.url;

  const handleUpdateChanges = async () => {
    try {
      const req = await fetch(destination);
      if (req.ok) {
        const res: Response = await req.json();
        setData(partialData);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError({ destination: err.message });
      }
    }
  };

  const handleGetInitialData = async () => {
    try {
      const req = await fetch(initial);
      const res = await req.json();
      setData(res);
    } catch (err) {
      if (err instanceof Error) {
        setError({ initial: err.message });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGetPartialData = async () => {
    try {
      const req = await fetch(initial);
      const res = await req.json();
      setPartialData(res);
    } catch (err) {
      if (err instanceof Error) {
        setError({ initial: err.message });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDataChanges = async () => {
    try {
      const req = await fetch(origin);
      const res = await req.json();
      setPartialData(res);
    } catch (err) {
      if (err instanceof Error) {
        setError({ origin: err.message });
      }
    }
  };

  useEffect(() => {
    data.length < partialData.length && handleUpdateChanges();
  }, [partialData]);

  useEffect(() => {
    handleGetPartialData();
    handleGetInitialData();
    const interval = setInterval(handleDataChanges, time);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (error) {
      console.error(JSON.stringify({ error }));
    }
  }, [error]);

  return { data, loading, error };
};

export default useRequestHandle;
