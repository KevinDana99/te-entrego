import useRouter from "../../../routes/context/hook/useRouter";
import Logo from "../../assets/Logo";
import { Head, Table, Body, Th, Td, Container, Block } from "../Table/styled";
import useShipmentMethod from "./hooks/useShipmentMethod";
import { OperatorContainer } from "./styled";
import { ShipmentTableType } from "./types";
const ShipmentMethodTable = ({ headers, data }: ShipmentTableType) => {
  const { handleSelectedMethod, selectedMethod } = useShipmentMethod(data);
  const { navigate, currentProps } = useRouter();

  console.log(currentProps.shipmentId);
  return (
    <>
      <Container>
        <Block> </Block>
        <Table>
          <Head>
            <tr>
              {headers.map((head) => (
                <Th>{head}</Th>
              ))}
            </tr>
          </Head>

          <Body>
            {data?.map((element, index) => {
              const active = index % 2 == 0 ? true : false;
              return (
                <>
                  <tr>
                    <Td active={active}>
                      <OperatorContainer>
                        {element.img ? (
                          <img width={100} src={element.img}></img>
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
        </Table>
      </Container>

      <button
        style={{
          alignSelf: "flex-end",
          marginTop: 40,
          background: "#59b6e7",
          outline: "none",
        }}
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          confirm("¿Estas segur@ que deseas confirmar este envio?")
            ? navigate("shipments")
            : console.log("no send");
        }}
      >
        Generar envio
      </button>
    </>
  );
};

export default ShipmentMethodTable;
