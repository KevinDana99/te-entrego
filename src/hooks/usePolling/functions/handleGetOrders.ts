import { StoreType } from "../../../wrapper";
import { ShopNameType } from "../types";

const handleGetOrders = ({
  shopName,
  store,
}: {
  shopName: ShopNameType;
  publicKey?: string;
  secretKey?: string;
  store?: StoreType;
}) => {
  const WOOCOMERCE_URL_GET_ORDERS = `${window.location.origin}/wp-json/woo/v1/orders`;
  const SHOPIFY_URL_GET_ORDERS = `/api/orders?shop=${store?.shop}&accessToken=${store?.accessToken}`;
  const origins = {
    shopify: {
      url: SHOPIFY_URL_GET_ORDERS,
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
