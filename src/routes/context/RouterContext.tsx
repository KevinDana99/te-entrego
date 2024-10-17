import { createContext, ReactNode, useState } from "react";
import { RoutesType } from "../types";

type RouterContextType = {
  currentPath: RoutesType;
  navigate: (path: RoutesType) => void;
};
// @ts-expect-error: valor inicial null hasta que se establezca en el Provider
export const RouterContext = createContext<RouterContextType>(null);

export const RouterProvider = ({
  children,
  defaultPath,
}: {
  children?: ReactNode;
  defaultPath: RoutesType;
}) => {
  const [currentPath, setCurrentPath] = useState(defaultPath);
  const handleRouteNavigate = (path: RoutesType) => {
    setCurrentPath(path);
  };

  const navigate = (path: RoutesType) => {
    handleRouteNavigate(path);
  };
  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
