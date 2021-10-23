import React from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';

export const NavLink = ({ title, href }) => (
  <Nav.Link className="navbar-item mx-3" href={href}>
    <b>{title}</b>
  </Nav.Link>
);


export const DashDropdown = ({ setIsZoomHovered, isZoomHovered }) => (
  <NavDropdown
    onMouseEnter={() => setIsZoomHovered(true)}
    onMouseLeave={() => setIsZoomHovered(false)}
    show={isZoomHovered}
    className="navbar-item mr-5"
    title={
      <span id="dropdown-title">
        <b>Dashboard</b>
      </span>
    }
    id="basic-nav-dropdown"
  >
    <NavDropdown.Item id="dropdown-item" href="/table">
      <b>Table</b>
    </NavDropdown.Item>
    <NavDropdown.Item id="dropdown-item" href="/chart">
      <b>Chart</b>
    </NavDropdown.Item>
  </NavDropdown>
);

