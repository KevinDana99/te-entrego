import { OrdersType } from "../OrderTable/types";
import { ShipmentsType } from "../ShipmentTable/types";

export type TableType = {
  headers: string[];
  data: OrdersType | ShipmentsType;
};
