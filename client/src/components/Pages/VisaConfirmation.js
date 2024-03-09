import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Axios from "axios";

const VisaConfirmation = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:5000/getVisaConfirmation/${id}`).then((resp) =>
      setData({ ...resp.data[0] })
    );
  }, [id]);

  return (
    <div className="bg-pic">
      <div className="visa-confirmation">
        <div className="visa-content">
          <h1>Visa Confirmation</h1>
          <div className="confirmation-details">
            <p>
              <span>Visa ID:</span> {data.visa_id}
            </p>
            <p>
              <span>Country:</span> {data.country}
            </p>
            <p>
              <span>Visa Type:</span> {data.type}
            </p>
            <p>
              <span>Processing Time:</span> {data.processing_time}
            </p>
            <p>
              <span>Price:</span> $ {data.price}
            </p>
          </div>
        </div>
        <div className="visa-barcode"></div>
      </div>
      <div>
        <Link to={`/CustomerDashboard/${id}`}>
          <button className="btn btn-primary" style={{ marginLeft: '57.5vw', marginTop: '62vh' }}>
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VisaConfirmation;
