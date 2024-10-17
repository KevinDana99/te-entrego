import { useContext, useEffect, useState } from "react";
import { RouterContext, RouterProvider } from "./context/RouterContext";
import useRouter from "./context/hook/useRouter";
import Orders from "../views/Orders";
import { RoutesType } from "./types";
import Shipments from "../views/Shipments";

export const Router = ({ children }: { children: JSX.Element[] }) => {
  const { currentPath } = useContext(RouterContext);
  const selectedRoute = children.find(
    (child) => child.props.path === currentPath
  );
  return selectedRoute;
};

export const Route = ({
  children,
}: {
  path: RoutesType;
  children: JSX.Element;
}) => {
  return children;
};

export const Link = ({
  path,
  children,
}: {
  path: RoutesType;
  children: string | JSX.Element;
}) => {
  const { navigate } = useRouter();
  return <a onClick={() => navigate(path)}>{children}</a>;
};

const AppRouter = ({
  children,
  defaultPath,
}: {
  children?: JSX.Element;
  defaultPath: RoutesType;
}) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  if (children) {
    return (
      client && (
        <RouterProvider defaultPath={defaultPath}>{children}</RouterProvider>
      )
    );
  }
  return (
    client && (
      <RouterProvider defaultPath={defaultPath}>
        <Router>
          <Route path="orders">
            <Orders />
          </Route>
          <Route path="shipments">
            <Shipments />
          </Route>
        </Router>
      </RouterProvider>
    )
  );
};

export default AppRouter;
