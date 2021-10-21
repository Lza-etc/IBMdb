import { React, useState } from "react";
import { Navbar, Nav, Container,Spinner,Row } from "react-bootstrap";
import ReactTable from "./ReactTable.js";

import axios from "axios";

function Home() {
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
      <header>
        <Navbar
          fixed="top"
          className="navbar py-3"
          variant="dark"
          bg="secondary"
          expand="xl"
        >
          <Container>
            <Navbar.Brand href="#home">SensorData</Navbar.Brand>
            <Nav className="  justify-content-end">
              <Nav.Link href="#features" className="mx-4">
                Feautures
              </Nav.Link>
              <Nav.Link href="#aboutus" className="mx-4">
                About Us
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-4">
                Pricing
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
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

export default Home;
