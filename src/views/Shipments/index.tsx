import Header from "../../components/Header";
import ShipmentTable from "../../components/tables/ShipmentTable";

import shipmentsMock from "./../../mocks/ShipmentTable/index.json";
const Shipments = () => {
  return (
    <>
      <Header />
      <ShipmentTable
        headers={[
          "Operador",
          "Num",
          "Fecha",
          "Estado",
          "Cuenta Remitente",
          "Remitente",
          "Destino",
          "Destinatario",
          "Unidad",
          "Peso",
        ]}
        data={shipmentsMock}
      />
    </>
  );
};

export default Shipments;
