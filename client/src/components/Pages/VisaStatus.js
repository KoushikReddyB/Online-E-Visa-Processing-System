import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Sidebar from './Sidebar';
import './styles/Tables.css';

const VisaStatus = () => {
  const [data, setData] = useState([]);
  
  // Function to fetch visa status data
  const loadData = async () => {
    try {
      const response = await Axios.get('http://localhost:5000/visaStatus/api/get');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching visa status data:', error);
    }
  };

  // Fetch visa status data on component mount
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
              <th style={{ textAlign: 'center' }}>Visa Status ID</th>
              <th style={{ textAlign: 'center' }}>Status</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{item.visaStatus_id}</td>
                <td>{item.status}</td>
                <td>
                  <Link to={`/ViewVisaStatus/${item.visaStatus_id}`}>
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
}

export default VisaStatus;
