import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import './styles/View.css';

const ViewVisaOffice = () => {
  const [visaOffice, setVisaOffice] = useState({});
  const { id } = useParams();

  useEffect(() => {
    Axios
      .get(`http://localhost:5000/visaOffice/api/get/${id}`)
      .then((response) => setVisaOffice({ ...response.data[0] }));
  }, [id]);

  return (
    <div style={{ marginTop: '150px' }}>
      <div className='card'>
        <div className='card-header'>
          <p>Visa Office Detail</p>
        </div>
        <div className='container'>
          <strong>Visa Office ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Visa Office Name: </strong>
          <span>{visaOffice.office_name}</span>
          <br />
          <br />
          <strong>City: </strong>
          <span>{visaOffice.city}</span>
          <br />
          <br />
          <strong>Location: </strong>
          <span>{visaOffice.location}</span>
          <br />
          <br />
          <Link to='/VisaOffice'>
            <div className='btn btn-edit'>Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewVisaOffice;
