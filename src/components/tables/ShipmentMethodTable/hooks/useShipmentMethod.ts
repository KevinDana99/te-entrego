import { useEffect, useState } from "react";
import { ShipmentTableType } from "../types";
import useFetch from "../../../../hooks/useFetch";
import { WoocomerceOrderType } from "../../OrderTable/types";
import { ConfigType } from "../../../../views/Config/hooks/useConfig";
import {
  CustomOrderType,
  CustomShipmentOrderType,
  LocationResponseType,
} from "./types";

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
  const [shipmentOrder, setShipmentOrder] =
    useState<CustomShipmentOrderType | null>(null);

  const handleSelectedMethod = (
    index: number,
    currentOrder: CustomShipmentOrderType
  ) => {
    setSelectedMethod(index);
    setShipmentOrder(currentOrder);
  };
  const [customOrder, setCustomOrder] = useState<CustomOrderType | null>(null);

  const handleCreateShipment = () => {
    fetch("https://te-entrego.com/teadmin_beta/public/api/generarenviov2", {
      method: "POST",
      body: JSON.stringify(shipmentOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
  const originLocation = handleGetOriginLocation.data as LocationResponseType;
  const destinationLocation =
    handleGetDestinationLocation.data as LocationResponseType;

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

  useEffect(() => {
    if (originLocation.length !== 0 && destinationLocation.length !== 0) {
      setCustomOrder({
        origen: originLocation[0].codigodanelargo,
        destino: destinationLocation[0].codigodanelargo,
        unidades: order.line_items[0].fulfillable_quantity,
        kilos: weight || 0,
        ancho: width || 0,
        alto: height || 0,
        largo: length || 0,
        vlrdeclarado: order.total_price,
        vlrecaudo: order.sub_total_price,
        dest_flete: 0,
        dest_comision: 0,
        operador: "",
        codigocliente: config.client_code,
        accesoapi: config.public_key,
        llaveseguridad: config.secret_key,
      });
    }
  }, [originLocation, destinationLocation]);

  return {
    selectedMethod,
    shipmentOrder,
    customOrder,
    preOrder: order,
    handleSelectedMethod,
    handleCreateShipment,
  };
};

export default useShipmentMethod;
