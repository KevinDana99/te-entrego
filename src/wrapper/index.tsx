import AppRouter from "./../routes";
import { Container } from "./styled";
import { useEffect, useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Views from "../views";
import Layout from "../Layout";
import Login from "../views/Login";

const Wrapper = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  const auth = true;

  if (!auth) {
    return (
      <>
        <Login />
      </>
    );
  } else {
    return (
      show && (
        <Container>
          <AppRouter defaultPath="shipments">
            <Layout>
              <Sidebar />
              <Views />
            </Layout>
          </AppRouter>
        </Container>
      )
    );
  }
};

export default Wrapper;
