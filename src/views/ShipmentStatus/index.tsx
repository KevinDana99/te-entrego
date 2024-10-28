import DisabledShipmentStatus from "../../components/assets/icons/DisabledShipmentStatus";
import EnableShipmentStatus from "../../components/assets/icons/EnableShipmentStatus";
import InitialShipmentStatus from "../../components/assets/icons/InitialShipmentStatus";
import { Card, Container, Detail, Divider, Status, WrapperImg } from "./styled";

const ShipmentStatus = () => {
  return (
    <Container>
      <Card>
        <WrapperImg>
          <InitialShipmentStatus />
        </WrapperImg>
        <Status>en reparto</Status>
        <Detail>
          <b>Estado:</b> <Status> en reparto</Status>
        </Detail>
        24-04-2024
      </Card>
      <Divider />
      <Card>
        <WrapperImg>
          <EnableShipmentStatus />
        </WrapperImg>
        <Status>en terminal de destino</Status>
        <Detail>
          <b>Estado:</b> <Status> en terminal de destino</Status>
        </Detail>
        24-04-2024
      </Card>
      <Divider />
      <Card>
        <WrapperImg>
          <DisabledShipmentStatus />
        </WrapperImg>
        <Status>en transporte</Status>
        <Detail>
          <b>Estado:</b> <Status> en transporte</Status>
        </Detail>
        24-04-2024
      </Card>
      <Divider />
      <Card>
        <WrapperImg>
          <DisabledShipmentStatus />
        </WrapperImg>
        <Status>entregado</Status>
        <Detail style={{ color: "#60789A" }}>Llego tu pedido</Detail>
      </Card>
    </Container>
  );
};

export default ShipmentStatus;
