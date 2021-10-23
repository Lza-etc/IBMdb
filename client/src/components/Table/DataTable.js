import { React, useState } from "react";
import { Spinner,Row } from "react-bootstrap";
import ReactTable from "./ReactTable";

import axios from "axios";

function DataTable() {
  const [data, setData] = useState([]);
  const [f, setF] = useState(true);
  const [loading, setLoading] = useState(true);

  if (data.length ===0 && f) {
    setF(false);
    setLoading(true);
    axios
      .get("https://55d68259.eu-gb.apigw.appdomain.cloud/api/entries")
      .then((res) => {
        setLoading(false);
        setData(res.data.entries);
        
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div  style={{ width: '65rem', margin:'11rem'}}>
        <Row >
          <Row className="p-3 ">
            {loading && (
              <Spinner
                animation="border"
                role="status"
                style={{ marginLeft: "38rem" }}
              >
              </Spinner>
            )}
            {!loading && data && data.length === 0 && (
              <h5 style={{ marginLeft: "32rem" }}>No Data in DB</h5>
            )}
            {data && data.length !== 0 && (
              <ReactTable
                d={data}
              />
            )}
          </Row>
        </Row>
      </div>
      </div>
  );
}

export default DataTable;
