import Logo from "../../components/assets/Logo";
import ShipmentTable from "../../components/tables/ShipmentTable";
import { ShipmentsType } from "../../components/tables/ShipmentTable/types";

const Shipments = ({
  shipmentData,
}: {
  shipmentData: { error: unknown; loading: boolean; data: ShipmentsType };
}) => {
  const { error, data, loading } = shipmentData;

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo size={250} />
      </div>
    );
  }

  if (error) {
    return `${error}`;
  }

  return (
    <>
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
        data={data}
      />
    </>
  );
};

export default Shipments;
