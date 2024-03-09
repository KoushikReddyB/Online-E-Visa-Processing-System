// VisaApplicationForm.jsx
import React, { useState } from 'react';
import Axios from 'axios';

const VisaApplicationForm = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    passportNumber: '',
    country: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/visa/application', formData);
      console.log('Visa application submitted successfully:', response.data);
      // Handle success - e.g., show success message to user
    } catch (error) {
      console.error('Error submitting visa application:', error);
      // Handle error - e.g., show error message to user
    }
  };

  return (
    <div className="visa-application-form">
      <h2>Visa Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="applicantName">Applicant Name</label>
          <input
            type="text"
            id="applicantName"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="passportNumber">Passport Number</label>
          <input
            type="text"
            id="passportNumber"
            name="passportNumber"
            value={formData.passportNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default VisaApplicationForm;
