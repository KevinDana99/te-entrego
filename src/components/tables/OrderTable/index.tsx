import { Head, Table, Body, Container, Block, Th, Td } from "../Table/styled";
import { OrderTableType } from "./types";

const OrderTable = ({ headers, data }: OrderTableType) => {
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
                  <Td active={active}>{element?.name}</Td>
                  <Td active={active}>{element?.created_at}</Td>
                  <Td
                    active={active}
                  >{`${element?.customer.first_name} ${element?.customer.last_name}`}</Td>
                  <Td active={active}>Tienda Online</Td>
                  <Td active={active}>{`$${element?.total_price}`}</Td>
                  <Td active={active}>
                    {" "}
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
                      {element?.financial_status}
                    </div>
                  </Td>
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
                      {element?.fulfillment_status}
                    </div>
                  </Td>
                  <Td active={active}>
                    {element?.line_items[0].fulfillable_quantity}
                  </Td>
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
                      {element?.fulfillment_status}
                    </div>
                  </Td>
                  <Td active={active}>
                    <button style={{ margin: 3, background: "#59b6e7" }}>
                      Enviar Pedido
                    </button>
                  </Td>
                </tr>
              </>
            );
          })}
        </Body>
      </Table>
    </Container>
  );
};

export default OrderTable;
