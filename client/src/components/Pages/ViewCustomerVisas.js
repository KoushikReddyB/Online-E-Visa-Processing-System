import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import "./styles/Tables.css";

const ViewCustomerVisas = () => {
  const [visas, setVisas] = useState([]);
  const { id } = useParams();

  const loadVisas = async () => {
    try {
      const response = await Axios.get(`http://localhost:5000/customer/visas/${id}`);
      setVisas(response.data);
    } catch (error) {
      console.error("Error fetching visas:", error);
    }
  };

  useEffect(() => {
    loadVisas();
  }, []);

  return (
    <div>
      <div className="bg-tasweer">
        <Link to={`/CustomerPanel/${id}`}>
          <button className="btn btn-client" style={{ backgroundColor: "blue", color: "white", width: "120px", marginLeft: "760px" }}>Back to Main</button>
        </Link>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>S. No</th>
              <th style={{ textAlign: "center" }}>Visa Type</th>
              <th style={{ textAlign: "center" }}>Issue Date</th>
              <th style={{ textAlign: "center" }}>Expiration Date</th>
              <th style={{ textAlign: "center" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {visas.map((visa, index) => (
              <tr key={index} style={{ backgroundColor: "white" }}>
                <th scope="row">{index + 1}</th>
                <td>{visa.type}</td>
                <td>{visa.issue_date}</td>
                <td>{visa.expiration_date}</td>
                <td>{visa.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCustomerVisas;
