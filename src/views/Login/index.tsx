import { useEffect } from "react";
import { Container } from "./styled";

const DynamicCSSLoader = ({ cssFile }: { cssFile: string }) => {
  useEffect(() => {
    // Crear el elemento <link>
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssFile;
    document.head.appendChild(link);

    // Función de limpieza para eliminar el <link> al desmontar el componente
    return () => {
      document.head.removeChild(link);
    };
  }, [cssFile]); // Dependencia para cargar el CSS solo si cambia el archivo

  return null;
};

const Login = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <>
      <DynamicCSSLoader cssFile={"./styles.css"} />
      <Container>
        <div className="main-content-wrap container-fluid vh-100 mt-0 p-0">
          <div
            className="row text-center align-items-center bg "
            style={{
              height: "100%",
              position: "absolute",
              width: "100%",
              margin: 0,
            }}
          >
            <div className="col-md-4 right_register pl-5">
              <h2 className="font-weight-bold mt-5">Inicio sesión</h2>
              <div className="col-md-12">
                <img
                  src="https://te-entrego.com/admin-assets/images/Registro_Ilus.svg"
                  alt=""
                />
              </div>
              <h3>
                ¡Todo lo que necesitas para el control contraentrega y logística
                de tu Ecommerce!
              </h3>
              <p>¡Comienza ya!</p>

              <h5>
                {" "}
                <strong>Te-entrego </strong> S.A.S. 2024
              </h5>
            </div>

            <div className="col-md-8 left_register bg-login">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 mb-3 mt-4">
                      <img
                        src="https://te-entrego.com/admin-assets/images/logo_registro.svg"
                        alt="Logo te entrego"
                      />
                    </div>
                  </div>

                  <form
                    action="https://te-entrego.com/teadmin/public/login"
                    method="post"
                    accept-charset="utf-8"
                  >
                    <input
                      type="hidden"
                      name="_te_token"
                      value="7f6d20ce15f9fc5a00e21bb03dea7f67"
                    />{" "}
                    <div className="row mt-3 justify-content-center">
                      <div className="col-md-6 form-group all-labels text-left">
                        <label>*Correo electrónico</label>
                        <input
                          type="email"
                          className="form-control"
                          id="usuario"
                          name="usuario"
                          placeholder="* obligatorio"
                          required
                        />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-md-6 form-group all-labels text-left">
                        <label>*Contraseña</label>
                        <input
                          type="password"
                          className="form-control"
                          id="clave"
                          name="clave"
                          placeholder="* obligatorio"
                          required
                        />
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-md-12">
                        <button
                          onClick={onLogin}
                          className="btn btn-info pl-5 pr-5 font-weight-bold m-2"
                        >
                          Ingresar
                        </button>
                        <a
                          href="https://te-entrego.com/teadmin/public/registro/nuevo"
                          className="btn btn-dark pl-5 pr-5 font-weight-bold"
                          id="btn_recuperar"
                        >
                          Eres nuevo?{" "}
                        </a>
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-md-6 mb-5">
                        <a
                          href="https://te-entrego.com/teadmin/public/recuperar"
                          className="btn btn-link p-0"
                          id="btn_recuperar"
                        >
                          Recupera tu contraseña{" "}
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
