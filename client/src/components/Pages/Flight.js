import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';
import './styles/Tables.css';

const Visa = () => {
  const [data, setData] = useState([]);
  
  // Function to fetch visa data
  const loadData = async () => {
    try {
      const response = await Axios.get('http://localhost:5000/visa/api/get');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching visa data:', error);
    }
  };

  // Fetch visa data on component mount
  useEffect(() => {
    loadData();
  }, []);

  // Function to delete a visa entry
  const delVisa = (id) => {
    if (window.confirm(`Do you really want to delete Visa with ID ${id}?`)) {
      Axios.delete(`http://localhost:5000/visa/api/remove/${id}`)
        .then(() => {
          toast.success('Visa deleted successfully!');
          setTimeout(() => loadData(), 500);
        })
        .catch((error) => {
          console.error('Error deleting visa:', error);
          toast.error('Error deleting visa. Please try again.');
        });
    }
  };

  return (
    <>
      <Sidebar />
      <div>
        <Link to='/AddVisa'>
          <button style={{ marginLeft: "713px" }} className='btn btn-client'>Add Visa</button>
        </Link>
        <table className='styled-table'>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>S. No</th>
              <th style={{ textAlign: 'center' }}>Visa ID</th>
              <th style={{ textAlign: 'center' }}>Country</th>
              <th style={{ textAlign: 'center' }}>Issue Date</th>
              <th style={{ textAlign: 'center' }}>Expiry Date</th>
              <th style={{ textAlign: 'center' }}>Purpose</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{item.visa_id}</td>
                <td>{item.country}</td>
                <td>{item.issue_date}</td>
                <td>{item.expiry_date}</td>
                <td>{item.purpose}</td>
                <td>
                  <button className='btn btn-delete' onClick={() => delVisa(item.visa_id)}>Delete</button>
                  <Link to={`/ViewVisa/${item.visa_id}`}>
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

export default Visa;
