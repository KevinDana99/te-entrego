import AppRouter from "./../routes";
import { Container } from "./styled";
import { useEffect, useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Views from "../views";
import Layout from "../Layout";
import Login from "../views/Login";
import useConfig from "../views/Config/hooks/useConfig";
import { ShopNameType } from "../hooks/usePolling/types";

const Wrapper = ({ shopName }: { shopName: ShopNameType }) => {
  useConfig();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  const [auth, setAuth] = useState(true);
  const handleLogin = () => {
    setAuth(true);
  };
  if (!auth) {
    return (
      <>
        <Login onLogin={handleLogin} />
      </>
    );
  } else {
    return (
      show && (
        <Container>
          <AppRouter defaultPath="shipments">
            <Layout>
              <Sidebar />
              <Views shopName={shopName} />
            </Layout>
          </AppRouter>
        </Container>
      )
    );
  }
};

export default Wrapper;
