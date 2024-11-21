import { Body, Td } from "../../Table/styled";
import Logo from "../../../assets/Logo";
import { OperatorContainer } from "../styled";
import { CustomOrderType } from "../hooks/types";
import useFetch from "../../../../hooks/useFetch";
import { CotizationResponseType } from "./types";
const CotizationDetail = ({
  customOrder,
  handleSelectedMethod,
  selectedMethod,
}: {
  selectedMethod: number | null;
  handleSelectedMethod: (index: number) => void;
  customOrder: CustomOrderType;
}) => {
  const { loading, data, error } = useFetch(
    "https://te-entrego.com/teadmin_beta/public/api/calcular_envio",
    {
      ...customOrder,
    }
  );

  if (loading) {
    return <>cargando...</>;
  }
  if (error) {
    return <>error {console.log(error)}</>;
  }

  const cotizationData = data as CotizationResponseType;

  console.log({ cotizationData, data });
  return (
    <Body>
      {cotizationData?.map((element, index) => {
        const active = index % 2 == 0 ? true : false;
        return (
          <>
            <tr>
              <Td active={active}>
                <OperatorContainer>
                  {element.logo ? (
                    <img width={100} src={element.logo} />
                  ) : (
                    <Logo />
                  )}
                </OperatorContainer>
              </Td>
              <Td active={active}>{element?.resultados.total}</Td>
              <Td active={active}>
                {index === selectedMethod ? (
                  <button
                    style={{
                      margin: 3,
                      background: "#ffffff",
                      color: "#59b6e7",
                      border: "2px solid #59b6e7",
                      outline: "none",
                    }}
                  >
                    Seleccionado
                  </button>
                ) : (
                  <button
                    style={{
                      margin: 3,
                      background: "#59b6e7",
                      outline: "none",
                    }}
                    onClick={() => handleSelectedMethod(index)}
                  >
                    Seleccionar
                  </button>
                )}
              </Td>
            </tr>
          </>
        );
      })}
    </Body>
  );
};

export default CotizationDetail;
