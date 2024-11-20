//import { Body, Td } from "../../Table/styled";
//import { ShipmentTableType } from "../types";
//import Logo from "../../../assets/Logo";
//import { OperatorContainer } from "../styled";
import { CustomOrderType } from "../hooks/types";
import useFetch from "../../../../hooks/useFetch";
import { CotizationResponseType } from "./types";
const CotizationDetail = ({
  customOrder,
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

  const cotizationData = data.lista as CotizationResponseType;

  console.log({ cotizationData });
  return <></>;
};

export default CotizationDetail;
/*
    <Body>
      {cotizationData?.map((element, index) => {
        const active = index % 2 == 0 ? true : false;
        return (
          <>
            <tr>
              <Td active={active}>
                <OperatorContainer>
                  {element.img ? (
                    <img width={100} src={element.img} />
                  ) : (
                    <Logo />
                  )}
                </OperatorContainer>
              </Td>
              <Td active={active}>{element?.price}</Td>
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
    */
