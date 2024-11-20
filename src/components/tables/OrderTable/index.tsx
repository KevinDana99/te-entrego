import { Link } from "../../../routes";
import { Head, Table, Body, Container, Block, Th, Td } from "../Table/styled";
import {
  OrderTableType,
  WoocomerceOrdersType,
  WoocomerceOrderType,
} from "./types";

const OrderTable = ({ headers, data }: OrderTableType) => {
  const mapWoocomerceOrders = () => {
    const woocomerceData = data as WoocomerceOrdersType;
    const orders = woocomerceData.map((item) => {
      const order: WoocomerceOrderType = {
        name: item.id,
        created_at: item.date_created,
        customer: {
          first_name: item.billing.first_name,
          last_name: item.billing.last_name,
          city: item.billing.city,
        },
        total_price: item.total,
        sub_total_price: item.subtotal,
        financial_status: item.status,
        fulfillment_status: "preparing",
        fulfillable_quantity: Object.entries(item.line_items)[0][1].quantity,
        line_items: [
          {
            fulfillable_quantity: Object.entries(item.line_items)[0][1]
              .quantity,
          },
        ],
        products: item.products,
      };
      return order;
    });
    return orders;
  };

  const woocomerceOrders = mapWoocomerceOrders();

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
          {woocomerceOrders?.map((element, index) => {
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
                    <Link path="shipment-method" order={element}>
                      <button style={{ margin: 3, background: "#59b6e7" }}>
                        Enviar Pedido
                      </button>
                    </Link>
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
