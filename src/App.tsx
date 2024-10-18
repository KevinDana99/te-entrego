import "./App.css";
import AppRouter, { Route, Router } from "./routes";
import Orders from "./views/Orders";
import Shipments from "./views/Shipments";

function App() {
  return (
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
  );
}

export default App;
