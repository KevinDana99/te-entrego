import { Body, Td } from "../../Table/styled";
import Logo from "../../../assets/Logo";
import { OperatorContainer } from "../styled";
import { CustomOrderType, CustomShipmentOrderType } from "../hooks/types";
import { CotizationResponseType } from "./types";
import useCotizationDetail from "./hooks/useCotizationDetail";
import { WoocomerceOrderType } from "../../OrderTable/types";
const CotizationDetail = ({
  customOrder,
  handleSelectedMethod,
  selectedMethod,
  preOrder,
}: {
  selectedMethod: number | null;
  handleSelectedMethod: (
    index: number,
    currentOrder: CustomShipmentOrderType
  ) => void;
  customOrder: CustomOrderType;
  preOrder: WoocomerceOrderType;
}) => {
  const { data, error, loading, handleCreateShipmentOrder } =
    useCotizationDetail(preOrder, customOrder, handleSelectedMethod);

  if (loading) {
    return <>cargando...</>;
  }
  if (error) {
    return <>error {console.log(error)}</>;
  }

  const cotizationData = data as CotizationResponseType;

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
                    <img
                      width={100}
                      src={`https://te-entrego.com/teadmin_beta/public/assets/operadores/${element.logo}`}
                    />
                  ) : (
                    <Logo />
                  )}
                </OperatorContainer>
              </Td>
              <Td active={active}>
                <div>Flete total: ${element?.resultados.total}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${element?.resultados.adicionales}`,
                  }}
                ></div>
              </Td>
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
                    onClick={() => handleCreateShipmentOrder(index, element)}
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
