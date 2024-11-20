import wooOrdersMock from "./../../../mocks/OrderTable/wooOrderMock.json";
import ordersMock from "./../../../mocks/OrderTable/index.json";
export type OrdersType = typeof ordersMock;
export type WoocomerceOrdersType = typeof wooOrdersMock;
export type OrderTableType = {
  headers: string[];
  data: WoocomerceOrdersType | OrdersType;
};

export type WoocomerceOrderType = {
  name: number;
  created_at: string;
  customer: {
    first_name: string;
    last_name: string;
    city: string;
  };
  sub_total_price: number;
  total_price: string;
  financial_status: string;
  fulfillment_status: string;
  fulfillable_quantity: string;
  line_items: [
    {
      fulfillable_quantity: number;
    }
  ];
  products?: {
    weight: number;
    width: number;
    height: number;
    length: number;
  }[];
};
