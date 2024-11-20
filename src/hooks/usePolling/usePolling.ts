import { useEffect, useState } from "react";
import { UsePollingType } from "./types";
import handleGetOrders from "./functions/handleGetOrders";
import { ConfigType } from "../../views/Config/hooks/useConfig";

const TIME_INTERVAL_REQUEST = 8000;

const usePolling = ({
  time = TIME_INTERVAL_REQUEST,
  shopName = "woocommerce",
}: UsePollingType) => {
  const config: ConfigType = JSON.parse(localStorage.getItem("config") ?? "");
  const PUBLIC_KEY = config.platform_public_key;
  const SECRET_KEY = config.platform_secret_key;
  const [data, setData] = useState<[]>([]);
  const [partialData, setPartialData] = useState<[]>(data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const selectedShop = handleGetOrders({
    shopName,
    publicKey: PUBLIC_KEY,
    secretKey: SECRET_KEY,
  });

  const origin = selectedShop.url;

  const handleGetInitialData = async () => {
    try {
      const req = await fetch(origin, {
        method: "GET",
      });
      const res = await req.json();
      setData(res);
    } catch (err) {
      if (err instanceof Error) {
        setError({ error: err.message });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDataChanges = async () => {
    try {
      const req = await fetch(origin, {
        method: "GET",
      });
      const res = await req.json();
      setPartialData(res);
    } catch (err) {
      if (err instanceof Error) {
        setError({ error: err.message });
      }
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    data.length < partialData.length && setData(partialData);
  }, [partialData]);

  useEffect(() => {
    handleGetInitialData();
    const interval = setInterval(handleDataChanges, time);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};

export default usePolling;
