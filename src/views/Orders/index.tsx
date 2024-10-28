import OrderTable from "../../components/tables/OrderTable";
import ordersMock from "./../../mocks/OrderTable/index.json";
const Orders = () => {
  return (
    <OrderTable
      data={ordersMock}
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
//  <Header />
