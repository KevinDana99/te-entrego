import useFetch from "../../../../../hooks/useFetch";
import { CustomOrderType, CustomShipmentOrderType } from "../../hooks/types";
import { CotizationResponseItemType } from "../types";

const useCotizationDetail = (
  customOrder: CustomOrderType,
  handleSelectedMethod: (
    index: number,
    currentOrder: CustomShipmentOrderType
  ) => void
) => {
  const { loading, data, error } = useFetch(
    "https://te-entrego.com/teadmin_beta/public/api/calcular_envio",
    {
      ...customOrder,
    }
  );

  const {
    accesoapi,
    alto,
    ancho,
    codigocliente,
    dest_comision,
    dest_flete,
    destino,
    kilos,
    largo,
    llaveseguridad,
    origen,
    unidades,
    vlrdeclarado,
    vlrecaudo,
  } = customOrder;

  const handleCreateShipmentOrder = (
    index: number,
    element: CotizationResponseItemType
  ) => {
    handleSelectedMethod(index, {
      accesoapi,
      alto,
      ancho,
      codigocliente,
      dest_comision,
      dest_flete,
      destino,
      kilos,
      largo,
      llaveseguridad,
      origen,
      unidades,
      vlrdeclarado,
      vlrecaudo,
      operador: element.nombre,

      apellr: "",
      celulard: "",
      celularr: "",
      correod: "",
      correor: "",
      dird: "",
      dirr: "",
      fecha_recogida: "",
      identid: "",
      identir: "",
      nombred: "",
      nombrer: "",
      obs: "",
      adi: "",
    });
  };

  return { loading, data, error, customOrder, handleCreateShipmentOrder };
};

export default useCotizationDetail;
