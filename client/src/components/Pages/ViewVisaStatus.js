import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import './styles/View.css';

const ViewVisaStatus = () => {
  const [visaStatus, setVisaStatus] = useState({});
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:5000/visaStatus/api/get/${id}`)
      .then((resp) => setVisaStatus({ ...resp.data[0] }))
      .catch((error) => console.error('Error fetching visa status:', error));
  }, [id]);

  return (
    <div style={{ marginTop: '150px' }}>
      <div className='card'>
        <div className='card-header'>
          <p>Visa Status Detail</p>
        </div>
        <div className='container'>
          <strong>Visa Status ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Status: </strong>
          <span>{visaStatus.status}</span>
          <br />
          <br />
          <Link to='/VisaStatus'>
            <div className='btn btn-edit'>Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewVisaStatus;
