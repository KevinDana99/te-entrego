import { useState } from "react";
import { ShipmentTableType } from "../types";
import useFetch from "../../../../hooks/useFetch";
import { WoocomerceOrderType } from "../../OrderTable/types";
import { LocationResponseType } from "./types";
import { ConfigType } from "../../../../views/Config/hooks/useConfig";

const useShipmentMethod = (
  dataProp: ShipmentTableType["data"],
  currentProps: { order: WoocomerceOrderType }
) => {
  const storedConfig = localStorage.getItem("config");
  const config: ConfigType = storedConfig && JSON.parse(storedConfig);

  const handleLoadConfig = () => {
    const operator = config.operator;
    const getPosition = dataProp.findIndex(
      (el) => el.operator.toLowerCase() === operator
    );
    return getPosition;
  };
  const order = currentProps.order;
  const city = order.customer.city;
  const [selectedMethod, setSelectedMethod] = useState<number | null>(
    handleLoadConfig()
  );
  const handleSelectedMethod = (index: number) => {
    setSelectedMethod(index);
  };

  const handleGetOriginLocation = useFetch(
    "https://te-entrego.com/teadmin_beta/public/api/ciudades",
    {
      codigocliente: config.client_code,
      accesoapi: config.public_key,
      llaveseguridad: config.secret_key,
      paramb: city,
    }
  );

  const handleGetDestinationLocation = useFetch(
    "https://te-entrego.com/teadmin_beta/public/api/ciudades",
    {
      codigocliente: config.client_code,
      accesoapi: config.public_key,
      llaveseguridad: config.secret_key,
      paramb: city,
    }
  );

  const originLocation: LocationResponseType = handleGetOriginLocation.data;
  const destinationLocation: LocationResponseType =
    handleGetDestinationLocation.data;

  const handleGetSizesProducts = () => {
    const result = order?.products?.reduce(
      (accumulator, product) => {
        accumulator.weight += product.weight;
        if (product.width > accumulator.width) {
          accumulator.width = product.width;
        }
        if (product.height > accumulator.height) {
          accumulator.height = product.height;
        }
        if (product.length > accumulator.length) {
          accumulator.length = product.length;
        }
        return accumulator;
      },
      { weight: 0, width: 0, height: 0, length: 0 }
    );
    return {
      weight: result?.weight,
      width: result?.width,
      height: result?.height,
      length: result?.length,
    };
  };

  const { height, length, weight, width } = handleGetSizesProducts();

  const { loading, data, error } = useFetch(
    "https://te-entrego.com/teadmin_beta/public/api/calcular_envio",
    {
      origen: originLocation.lista[0].codigodanelargo,
      destino: destinationLocation.lista[0].codigodanelargo,
      unidades: order.line_items[0].fulfillable_quantity,
      kilos: weight,
      ancho: width,
      alto: height,
      largo: length,
      vlrdeclarado: order.total_price,
      vlrecaudo: order.sub_total_price,
      dest_flete: 0,
      dest_comision: 0,
      operador: config.operator,
      codigocliente: config.client_code,
      accesoapi: config.public_key,
      llaveseguridad: config.secret_key,
    }
  );

  console.log(data, loading, error);

  return { selectedMethod, handleSelectedMethod };
};

export default useShipmentMethod;
