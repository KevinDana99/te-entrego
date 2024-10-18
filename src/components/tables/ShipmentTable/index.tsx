import { Head, Table, Body, Th, Td, Container, Block } from "../Table/styled";
import { ShipmentTableType } from "./types";

const ShipmentTable = ({ headers, data }: ShipmentTableType) => {
  return (
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
                  <Td active={active}>{element?.operador}</Td>
                  <Td active={active}>{element?.envio}</Td>
                  <Td active={active}>{element?.fecha}</Td>
                  <Td active={active}>
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "18px",
                        background: "#663399",
                        color: "white",
                        padding: "5px",
                        borderRadius: "5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {element?.estado}
                    </div>
                  </Td>
                  <Td active={active}>{element?.cuentaremitente}</Td>
                  <Td active={active}>{element?.remitente}</Td>
                  <Td active={active}>{element?.destino}</Td>
                  <Td active={active}>{element?.destinatario}</Td>
                  <Td active={active}>{element?.unidades}</Td>
                  <Td active={active}>{element?.peso}kg</Td>
                </tr>
              </>
            );
          })}
        </Body>
      </Table>
    </Container>
  );
};

export default ShipmentTable;
