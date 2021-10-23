/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { DashDropdown, NavLink } from './NavComponents';

import '../css/Navigation.css';

function Navigation(props) {
  const { location } = props;

  const [isZoomHovered, setIsZoomHovered] = useState(false);

  return (
    <>
      <header>
        <Navbar fixed="top" className="navbar pl-5" variant="light" expand="xl">
          <Navbar.Brand className="mx-5 px-5" href="/">
          <b>SensorData</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={location.pathname} className="ml-auto my-2 mr-2 pl-5 px-5">
              <NavLink title="Features" href="/feature" />
              <NavLink title="About Us" href="/aboutus" />
              <DashDropdown
                setIsZoomHovered={setIsZoomHovered}
                isZoomHovered={isZoomHovered}
              />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}

export default withRouter(Navigation);
