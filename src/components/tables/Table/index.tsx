import { Container } from "./styled";
import { TableType } from "./types";

const Table = ({ headers, data }: TableType) => {
  return (
    <Container>
      <thead>
        <tr>
          {headers.map((head) => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data?.map((element) => {
          return (
            <>
              <tr>
                <td>{element?.operador}</td>
                <td>{element?.identir}</td>
                <td>{element?.fecha_recogida}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Container>
  );
};

export default Table;
