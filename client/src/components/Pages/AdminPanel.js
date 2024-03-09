import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from './Sidebar';
import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";
import MovingText from "react-moving-text";
import './styles/AdminPanel.css';

const AdminPanel = () => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    Axios.get('http://localhost:5000/visa/stats')
      .then((resp) => setStatistics(resp.data));
  }, []);

  return (
    <div className='bg-image'>
      <Sidebar />

      <br />
      <br />
      <br />
      <br />
      <MovingText
        type="popIn"
        duration="1600ms"
        delay="0s"
        direction="normal"
        timing="ease-in"
        iteration="5"
        fillMode="none"
      >
        <h1 style={{ textAlign: "center", fontSize: "80px", fontWeight: '800', color: 'white', backgroundColor: 'black', width: '100vw', padding: '10px' }}>Welcome to the E-Visa Admin Panel!</h1>
      </MovingText>
      <br />
      <br />
      <div style={{ backgroundColor: 'black', width: '100vw', padding: '10px' }}>
        <h1 style={{ color: 'white' }}>Total Visa Applications: {statistics.totalApplications}</h1>
        <h1 style={{ color: 'white' }}>Approved Visas: {statistics.approvedVisas}</h1>
        <h1 style={{ color: 'white' }}>Rejected Visas: {statistics.rejectedVisas}</h1>
      </div>
      <NavBtn>
        <NavBtnLink to="/">Logout</NavBtnLink>
      </NavBtn>
    </div>
  );
};

export default AdminPanel;