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
  const { customer, seller } = preOrder;

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
      celulard: customer.phone,
      correod: customer.email,
      dird: customer.address_1,
      nombred: `${customer.first_name} ${customer.last_name}`,
      nombrer: seller.shop_name,
      apellr: seller.shop_name,
      celularr: seller.phone,
      correor: seller.email,
      dirr: seller.address_1,
      identid: "",
      identir: "",
      obs: "",
      adi: "",
    });
  };

  return { loading, data, error, customOrder, handleCreateShipmentOrder };
};

export default useCotizationDetail;
