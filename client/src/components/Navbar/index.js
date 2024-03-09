import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img
          src={require("../../images/logo.png")}
          alt="logo"
          style={{ width: "110px", height: "110px", marginRight: "20px" }}
        />
      </NavLink>
      <NavMenu>
        <NavLink to="/BookTicket">Apply for E-Visa</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
      </NavMenu>
      <NavBtn>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" style={{ fontSize: '16px' }}>Client Login</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item><Link to='/sign-up' style={{ textDecoration: 'none', color: '#000' }}>Sign Up</Link></Dropdown.Item>
            <Dropdown.Item><Link to='/CustomerSignin' style={{ textDecoration: 'none', color: '#000' }}>Sign In</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </NavBtn>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
