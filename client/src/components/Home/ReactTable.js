import React, { useMemo } from 'react';
import { Container } from 'reactstrap';
import TableContainer from './TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import makeData from './makeData';

const ReactTable = ({ d }) => {
  const data = React.useMemo(
    () => makeData(d),
    [d],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Seller',
        accessor: 'seller',
        disableFilters: true,
      },
      
      {
        Header: 'Temperature',
        accessor: 'temperature',
        disableFilters: true,
      },
      {
        Header: 'Buyer',
        accessor: 'buyer',
        disableFilters: true,
      },
      {
        Header: 'Humidity',
        accessor: 'humidity',
        disableFilters: true,
      },
    ],
    [],
  );

  return (
    <Container style={{ marginLeft: '2rem' }}>
      <TableContainer columns={columns} data={data} />
    </Container>
  );
};

export default ReactTable;
