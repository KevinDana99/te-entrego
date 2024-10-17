import * as origins from "./mocks/origins.json";

export type ShopNameType = keyof typeof origins;

export type EndpointType = string;

export type UsePollingType = {
  time: number;
  initial: EndpointType;
  destination: EndpointType;
  shopName: ShopNameType;
};
