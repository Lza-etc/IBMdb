/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import React, { useState } from 'react';
import { Navbar, Nav ,Button} from 'react-bootstrap';
import { withRouter,NavLink } from 'react-router-dom';
import { DashDropdown, NavgLink } from './NavComponents';

import '../css/Navigation.css';

function Navigation(props) {
  const { location } = props;

  const [isZoomHovered, setIsZoomHovered] = useState(false);

  return (
    <>
      <header>
        <Navbar fixed="top" className="navbar pl-5" variant="light" expand="xl">
          <Navbar.Brand className="mx-5 px-5"  href="/">
          <b style={{marginRight:"33rem"}}>SensorData</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={location.pathname} className="ml-auto my-2 mr-2 pl-5 px-5">
              <NavgLink title="Features" href="/feature" />
              <NavgLink title="About Us" href="/aboutus" />
              <DashDropdown
                setIsZoomHovered={setIsZoomHovered}
                isZoomHovered={isZoomHovered}
              />
              <Button
              className="btn btn-success px-5 mx-5"
              size="sm"
              rounded="md"
            >
              <NavLink  to="/signin" >SignIn</NavLink>
              
            </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}

export default withRouter(Navigation);
