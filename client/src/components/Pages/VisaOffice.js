import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Sidebar from './Sidebar';
import './styles/Tables.css';

const VisaOffice = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await Axios.get('http://localhost:5000/visaoffice/api/get');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching visa office data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Sidebar />
      <div>
        <button style={{ width: "120px", marginLeft: "810px", visibility: "hidden" }} className='btn btn-client'></button>
        <table className='styled-table'>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>S. No</th>
              <th style={{ textAlign: 'center' }}>Visa Office Code</th>
              <th style={{ textAlign: 'center' }}>Visa Office Name</th>
              <th style={{ textAlign: 'center' }}>Location</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{item.visa_office_code}</td>
                <td>{item.visa_office_name}</td>
                <td>{item.location}</td>
                <td>
                  <Link to={`/ViewVisaOffice/${item.visa_office_code}`}>
                    <button className='btn btn-view'>View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VisaOffice;
