import "./App.css";
import Logo from "./components/assets/Logo";
import AppRouter, { Route, Router } from "./routes";
import { Container, LogoContainer } from "./styled";
import Orders from "./views/Orders";
import Shipments from "./views/Shipments";

function App() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <AppRouter defaultPath="shipments">
        <Router>
          <Route path="orders">
            <Orders />
          </Route>
          <Route path="shipments">
            <Shipments />
          </Route>
        </Router>
      </AppRouter>
    </Container>
  );
}

export default App;
