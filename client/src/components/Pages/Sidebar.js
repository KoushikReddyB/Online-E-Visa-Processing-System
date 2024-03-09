import React from 'react';
import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './styles/Sidebar.css'
const Sidebar=() => {
  return (
    <Menu>
      <Link className="menu-item" to="/AdminPanel">
        Home
      </Link>
      <Link className="menu-item" to="/Client">
        Clients
      </Link>
      <Link className="menu-item" to="/Visa">
        Visa
      </Link>
      <Link className="menu-item" to="/VisaStatus">
        Visa Status
      </Link>
      <Link className="menu-item" to="/VisaOffice">
        Visa Office
      </Link>
      <Link className="menu-item" to="/Schedule">
        Schedule
      </Link>
      <Link className="menu-item" to="/Booking">
        Booking
      </Link>
    </Menu>
  );
};

export default Sidebar;