import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import './styles/View.css';

const ViewCustomer = () => {
  const [customer, setCustomer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    Axios
      .get(`http://localhost:5000/customer/api/get/${id}`)
      .then((response) => setCustomer({ ...response.data[0] }));
  }, [id]);

  return (
    <div style={{ marginTop: '150px' }}>
      <div className='card'>
        <div className='card-header'>
          <p>Customer Detail</p>
        </div>
        <div className='container'>
          <strong>Customer ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>First Name: </strong>
          <span>{customer.fname}</span>
          <br />
          <br />
          <strong>Middle Name: </strong>
          <span>{customer.mname}</span>
          <br />
          <br />
          <strong>Last Name: </strong>
          <span>{customer.lname}</span>
          <br />
          <br />
          <strong>Phone: </strong>
          <span>{customer.phone}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{customer.email}</span>
          <br />
          <br />
          <strong>Passport: </strong>
          <span>{customer.passport}</span>
          <br />
          <br />
          <Link to='/Customer'>
            <div className='btn btn-edit'>Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomer;
