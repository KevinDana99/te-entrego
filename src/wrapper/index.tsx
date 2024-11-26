import AppRouter from "./../routes";
import { Container } from "./styled";
import { useEffect, useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Views from "../views";
import Layout from "../Layout";
import useConfig from "../views/Config/hooks/useConfig";
import { ShopNameType } from "../hooks/usePolling/types";

const Wrapper = ({ shopName }: { shopName: ShopNameType }) => {
  useConfig();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

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
};

export default Wrapper;
