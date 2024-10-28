import ShipmentMethodTable from "../../components/tables/ShipmentMethodTable";
import { shipmentMethodMock } from "../../components/tables/ShipmentMethodTable/types";

const ShipmentMethod = () => {
  return (
    <ShipmentMethodTable
      data={shipmentMethodMock}
      headers={["Operador", "Cotizacion", "Operacion"]}
    />
  );
};
export default ShipmentMethod;
