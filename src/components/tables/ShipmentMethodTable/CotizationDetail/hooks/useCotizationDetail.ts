import useFetch from "../../../../../hooks/useFetch";
import { WoocomerceOrderType } from "../../../OrderTable/types";
import { CustomOrderType, CustomShipmentOrderType } from "../../hooks/types";
import { CotizationResponseItemType } from "../types";

const useCotizationDetail = (
  preOrder: WoocomerceOrderType,
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
  const { customer } = preOrder;

  const handleCreateShipmentOrder = (
    index: number,
    element: CotizationResponseItemType
  ) => {
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const dia = String(hoy.getDate()).padStart(2, "0");

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
      operador: element.codigo,
      celulard: customer.phone,
      correod: customer.email,
      dird: customer.address_1,
      nombred: `${customer.first_name} ${customer.last_name}`,
      nombrer: customer.first_name,
      apellr: customer.last_name,
      celularr: customer.phone,
      correor: customer.email,
      dirr: customer.address_1,
      identid: "232323213231",
      identir: "432214343123",
      obs: "No hay observaciones",
      adi: "No hay observaciones",
      fecha_recogida: `${anio}-${mes}-${dia}`,
    });
  };

  return { loading, data, error, customOrder, handleCreateShipmentOrder };
};

export default useCotizationDetail;
