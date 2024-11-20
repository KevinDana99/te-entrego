import Logo from "../../components/assets/Logo";
import OrderTable from "../../components/tables/OrderTable";
import { ShopNameType } from "../../hooks/usePolling/types";
import usePolling from "../../hooks/usePolling/usePolling";

const Orders = ({ shopName }: { shopName: ShopNameType }) => {
  const { data, loading, error } = usePolling({
    shopName,
    time: 5000,
  });

  if (error) {
    return <>`{error}`</>;
  }

  if (loading) {
    return <Logo size={250} />;
  }

  return (
    <OrderTable
      data={data}
      headers={[
        "Pedido",
        "Fecha",
        "Cliente",
        "Canal",
        "Total",
        "Estado del pago",
        "Estado de preparacion del pedido",
        "Articulos",
        "Estado de la entrega",
        "Despacho",
      ]}
    />
  );
};

export default Orders;
