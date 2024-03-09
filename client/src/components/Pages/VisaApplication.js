import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Sidebar from './Sidebar';
import './styles/Tables.css';

const VisaApplication = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await Axios.get('http://localhost:5000/visa/application');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching visa application data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Sidebar />
      <div>
        <button style={{ width: '120px', marginLeft: '810px', visibility: 'hidden' }} className="btn btn-client"></button>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>S. No</th>
              <th style={{ textAlign: 'center' }}>Applicant Name</th>
              <th style={{ textAlign: 'center' }}>Passport Number</th>
              <th style={{ textAlign: 'center' }}>Country</th>
              <th style={{ textAlign: 'center' }}>Visa Type</th>
              <th style={{ textAlign: 'center' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.applicant_name}</td>
                  <td>{item.passport_number}</td>
                  <td>{item.country}</td>
                  <td>{item.visa_type}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VisaApplication;
