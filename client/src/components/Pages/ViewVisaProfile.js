import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import './styles/CustomerPanel.css'
import { useParams, Link } from "react-router-dom";

const ViewVisaProfile = () => {
  const { id } = useParams();
  const [visaData, setVisaData] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:5000/visa/api/get/${id}`)
      .then((resp) => setVisaData({ ...resp.data[0] }))
      .catch((error) => console.error('Error fetching visa profile:', error));
  }, []);

  return (
    <div className="vh-100 bg-pic">
      <MDBContainer  style={{ margin: '0', marginLeft: '28%' }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="6" className="mt-8">
            <MDBCard
              style={{ borderRadius: "15px", width: "800px", marginTop: "50%", height: '350px' }}
            >
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{
                        width: "225px",
                        height: "300px",
                        borderRadius: "10px",
                      }}
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      fluid
                    />
                  </div>
                  <div className="flex-grow-1 ms-5">
                    <div>
                      <MDBCardTitle>Visa Type: {visaData.visa_type}</MDBCardTitle>
                      <MDBCardTitle>Country: {visaData.country} </MDBCardTitle>
                      <MDBCardTitle>Expiration Date: {visaData.expiration_date}</MDBCardTitle>
                    </div>
                    <div style={{ display: "inline-block" }}>
                      <MDBCardTitle>Issue Date: {visaData.issue_date}</MDBCardTitle>
                      <MDBCardTitle>Status: {visaData.status}</MDBCardTitle>
                    </div>

                    <div className="d-flex pt-1">
                      <Link to={`/CustomerPanel/${id}`}>
                        <button
                          className="flex-grow-0 btn "
                          style={{ fontSize: "20px", backgroundColor: 'blue', color: 'white' }}
                        >
                          Back to Main
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ViewVisaProfile;
