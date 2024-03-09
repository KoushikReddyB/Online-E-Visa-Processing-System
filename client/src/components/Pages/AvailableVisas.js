import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import "./styles/Tables.css";

const initialState = {
  visa_id: "",
  country: "",
  type: "",
  processing_time: "",
  price: "",
};

const AvailableVisas = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const loadData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/availableVisas");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching available visas:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const bookVisa = async (visaId) => {
    if (id > 0) {
      // Assuming there's a function to book a visa
      try {
        const response = await Axios.post("http://localhost:5000/bookVisa", {
          visaId,
          customerId: id,
        });
        console.log(response.data);
        // Redirect to invoice page with the booked visa and customer id
      } catch (error) {
        console.error("Error booking visa:", error);
      }
    } else {
      // Redirect to customer sign in page if not logged in
    }
  };

  return (
    <div className="bg-pic">
      <button
        style={{ width: "120px", marginLeft: "810px", visibility: "hidden" }}
        className="btn btn-client"
      ></button>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Visa ID</th>
            <th style={{ textAlign: "center" }}>Country</th>
            <th style={{ textAlign: "center" }}>Type</th>
            <th style={{ textAlign: "center" }}>Processing Time</th>
            <th style={{ textAlign: "center" }}>Price</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr style={{ backgroundColor: "white" }} key={index}>
              <td>{item.visa_id}</td>
              <td>{item.country}</td>
              <td>{item.type}</td>
              <td>{item.processing_time}</td>
              <td>$ {item.price}</td>
              <td>
                <button
                  className={id > 0 ? "btn btn-book" : "btn btn-login"}
                  style={{ fontSize: "18px" }}
                  onClick={() => bookVisa(item.visa_id)}
                >
                  {id > 0 ? "Book" : "Login"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableVisas;
