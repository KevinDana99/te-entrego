import { ShopNameType } from "../types";

const handleGetOrders = ({
  shopName,
}: {
  shopName: ShopNameType;
  publicKey?: string;
  secretKey?: string;
}) => {
  const WOOCOMERCE_URL_GET_ORDERS = `${window.location.origin}/wp-json/woo/v1/orders`;
  const origins = {
    shopify: {
      url: "http://127.0.0.1:3001/shopify.com/orders",
    },
    woocommerce: {
      url: WOOCOMERCE_URL_GET_ORDERS,
    },
    vtex: {
      url: "",
    },
  };
  return origins[shopName];
};

export default handleGetOrders;
