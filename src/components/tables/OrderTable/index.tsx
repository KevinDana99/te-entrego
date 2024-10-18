import Table from "../Table";
import { OrdersType } from "./types";

const OrderTable = ({
  headers,
  data,
}: {
  headers: string[];
  data: OrdersType;
}) => {
  return (
    <Table headers={headers} data={data}/>

  );
};

export default OrderTable;
/*
  <table className="table table-dark">
      <thead>
        <tr>
          <th>id</th>
          <th>client_id</th>
          <th>shipment_id</th>
          <th>shipment</th>
          <th>bussiness</th>
          <th>price</th>
        </tr>
      </thead>

      <tbody>
        {data?.map((element) => {
          return (
            <>
              <tr className="table-active">
                <td>{element?.id}</td>
                <td>{element?.client_id}</td>
                <td>{element?.shipment_id}</td>
                <td>{element?.shipment}</td>
                <td>{element?.bussiness}</td>
                <td>{element?.price}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );*/
