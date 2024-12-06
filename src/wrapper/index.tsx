import AppRouter from "./../routes";
import { Container } from "./styled";
import { useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Views from "../views";
import Layout from "../Layout";
import Login from "../views/Login";
import useConfig from "../views/Config/hooks/useConfig";
import { ShopNameType } from "../hooks/usePolling/types";

const Wrapper = ({ shopName }: { shopName: ShopNameType }) => {
  useConfig();

  const [auth, setAuth] = useState(false);
  const handleValidateLogin = async () => {
    /* const res = await fetch("https://te-entrego.com/wp-login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        log: "contactenos@lumagodecolombia.com",
        pwd: "tu_contraseña",
        rememberme: "1",
      }),
    });
    */
    setAuth(true);
    console.log("hello");
    /* if (res.ok) {
      setAuth(true);
    } else {
      setAuth(false);
    }*/
  };

  if (!auth) {
    return (
      <>
        <Login onLogin={handleValidateLogin} />
      </>
    );
  } else {
    return (
      auth && (
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
