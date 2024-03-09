import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';
import './styles/Tables.css';

const VisaApplicants = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await Axios.get('http://localhost:5000/visa/applicants');
      setApplicants(response.data);
    } catch (error) {
      console.error('Error loading visa applicants:', error);
    }
  };

  const deleteApplicant = async (id) => {
    try {
      if (window.confirm(`Do you really want to delete the applicant with ID ${id}?`)) {
        await Axios.delete(`http://localhost:5000/visa/applicants/${id}`);
        toast.success('Applicant deleted successfully!');
        setTimeout(() => loadData(), 500);
      }
    } catch (error) {
      console.error('Error deleting applicant:', error);
      toast.error('An error occurred while deleting the applicant.');
    }
  };

  return (
    <>
      <Sidebar />
      <div>
        <Link to="/AddEditApplicant">
          <button className="btn btn-client">Add Applicant</button>
        </Link>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>S. No</th>
              <th style={{ textAlign: 'center' }}>Applicant ID</th>
              <th style={{ textAlign: 'center' }}>First Name</th>
              <th style={{ textAlign: 'center' }}>Middle Name</th>
              <th style={{ textAlign: 'center' }}>Last Name</th>
              <th style={{ textAlign: 'center' }}>Phone</th>
              <th style={{ textAlign: 'center' }}>Email</th>
              <th style={{ textAlign: 'center' }}>Passport</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{applicant.applicant_id}</td>
                <td>{applicant.first_name}</td>
                <td>{applicant.middle_name}</td>
                <td>{applicant.last_name}</td>
                <td>{applicant.phone}</td>
                <td>{applicant.email}</td>
                <td>{applicant.passport}</td>
                <td>
                  <Link to={`/UpdateApplicant/${applicant.applicant_id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button className="btn btn-delete" onClick={() => deleteApplicant(applicant.applicant_id)}>Delete</button>
                  <Link to={`/ViewApplicant/${applicant.applicant_id}`}>
                    <button className="btn btn-view">View</button>
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

export default VisaApplicants;
