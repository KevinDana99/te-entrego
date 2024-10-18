import shipmentsMock from "./../../../mocks/OrderTable/index.json";
export type OrdersType = typeof shipmentsMock;
export type OrderTableType = {
  headers: string[];
  data: OrdersType;
};
