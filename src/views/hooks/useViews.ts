import { useEffect } from "react";
import { ShipmentsType } from "../../components/tables/ShipmentTable/types";
import useFetch from "../../hooks/useFetch";
import useRouter from "../../routes/context/hook/useRouter";
import { RoutesType } from "../../routes/types";
import { ConfigType } from "../Config/hooks/useConfig";

type TitlesType = {
  [key in RoutesType]: string;
};

const titles: TitlesType = {
  config: "Configuracíon",
  shipments: "Mis envíos",
  orders: "Pedidos",
  "shipment-method": "Metodos de envio",
  "shipment-status": "Estado de envio",
};

const useViews = () => {
  const config: ConfigType = localStorage.getItem("config")
    ? JSON.parse(localStorage.getItem("config") ?? "")
    : null;

  const ACCESS_CLIENT_CODE = config.client_code;
  const ACCESS_PUBLIC_KEY = config.public_key;
  const ACCESS_SECRET_KEY = config.secret_key;

  const { currentPath } = useRouter();
  const selectedPath = titles[currentPath];

  const minDate = new Date();
  minDate.setDate(minDate.getDate() - (14 + 1));
  const maxDate = new Date();

  const shipmentData: {
    error: unknown;
    loading: boolean;
    data: ShipmentsType;
  } = useFetch(
    "https://te-entrego.com/teadmin_beta/public/api/estados_enviosv2",
    {
      min: `${minDate.getFullYear()}-${
        minDate.getMonth() + 1
      }-${minDate.getDate()}`,
      max: `${maxDate.getFullYear()}-${
        maxDate.getMonth() + 1
      }-${maxDate.getDate()}`,
      codigocliente: ACCESS_CLIENT_CODE,
      accesoapi: ACCESS_PUBLIC_KEY,
      llaveseguridad: ACCESS_SECRET_KEY,
    }
  );

  useEffect(() => {
    console.log("paso por envios");
  }, []);
  return { path: selectedPath, shipmentData };
};

export default useViews;
