import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import './styles/View.css';

const ViewVisa = () => {
  const [visa, setVisa] = useState({});
  const { id } = useParams();

  useEffect(() => {
    Axios
      .get(`http://localhost:5000/visa/api/get/${id}`)
      .then((response) => setVisa({ ...response.data[0] }));
  }, [id]);

  return (
    <div style={{ marginTop: '150px' }}>
      <div className='card'>
        <div className='card-header'>
          <p>Visa Details</p>
        </div>
        <div className='container'>
          <strong>Visa ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Country: </strong>
          <span>{visa.country}</span>
          <br />
          <br />
          <strong>Validity: </strong>
          <span>{visa.validity}</span>
          <br />
          <br />
          <strong>Requirements: </strong>
          <span>{visa.requirements}</span>
          <br />
          <br />
          <Link to='/Visa'>
            <div className='btn btn-edit'>Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewVisa;
