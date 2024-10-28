import { LogoContainer } from "../wrapper/styled";
import Logo from "../components/assets/Logo";
import { Route, Router } from "../routes";
import Orders from "./Orders";
import Shipments from "./Shipments";
import { Container, Title } from "./styles";
import Config from "./Config";
import useViews from "./hooks/useViews";
import ShipmentStatus from "./ShipmentStatus";
import ShipmentMethod from "./ShipmentMethod";

const Views = () => {
  const { path } = useViews();
  return (
    <Container>
      <Title> {path}</Title>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Router>
        <Route path="orders">
          <Orders />
        </Route>
        <Route path="shipments">
          <Shipments />
        </Route>
        <Route path="shipment-method">
          <ShipmentMethod />
        </Route>
        <Route path="shipment-status">
          <ShipmentStatus />
        </Route>
        <Route path="config">
          <Config />
        </Route>
      </Router>
    </Container>
  );
};

export default Views;
