import useRouter from "../../../routes/context/hook/useRouter";

import { Head, Table, Th, Container, Block } from "../Table/styled";
import CotizationDetail from "./CotizationDetail";
import useShipmentMethod from "./hooks/useShipmentMethod";

import { ShipmentTableType } from "./types";

const ShipmentMethodTable = ({
  headers,
  data: dataProp,
}: ShipmentTableType) => {
  const { navigate, currentProps } = useRouter();
  const { handleSelectedMethod, selectedMethod, customOrder } =
    useShipmentMethod(dataProp, currentProps);
  console.log({ customOrder, currentProps });
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
          {customOrder && (
            <CotizationDetail
              handleSelectedMethod={handleSelectedMethod}
              selectedMethod={selectedMethod}
              customOrder={customOrder}
            />
          )}
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
