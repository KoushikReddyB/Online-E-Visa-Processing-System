import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./styles/AddEdit.css";
import Axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  client_id: "",
  first_name: "",
  middle_name: "",
  last_name: "",
  phone: "",
  email: "",
  passport: "",
};

const AddEditClient = () => {
  const [state, setState] = useState(initialState);
  const { client_id, first_name, middle_name, last_name, phone, email, passport } = state;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      Axios.get(`http://localhost:5000/clients/${id}`)
        .then((response) => setState({ ...response.data }))
        .catch((error) => console.error(error));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!client_id || !first_name || !last_name || !phone || !email || !passport) {
      toast.error("Required fields are empty");
    } else {
      const clientData = {
        client_id,
        first_name,
        middle_name,
        last_name,
        phone,
        email,
        passport,
      };
      const url = id ? `http://localhost:5000/clients/update/${id}` : "http://localhost:5000/clients/add";
      const requestMethod = id ? Axios.put : Axios.post;

      requestMethod(url, clientData)
        .then(() => {
          setState(initialState);
          const successMessage = id ? "Client updated successfully" : "Client added successfully";
          toast.success(successMessage);
          history.push("/Client");
        })
        .catch((error) => toast.error(error.response.data));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "600px",
          alignContent: "center",
          backgroundColor: "grey",
          borderRadius: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="client-id">Client ID</label>
        <input
          type="text"
          name="client_id"
          value={client_id}
          placeholder="Client ID"
          onChange={handleInputChange}
          required
        />

        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          name="first_name"
          value={first_name}
          placeholder="First Name"
          onChange={handleInputChange}
        />

        <label htmlFor="middle-name">Middle Name</label>
        <input
          type="text"
          name="middle_name"
          value={middle_name}
          placeholder="Middle Name"
          onChange={handleInputChange}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={last_name}
          placeholder="Last Name"
          onChange={handleInputChange}
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          value={phone}
          placeholder="Phone"
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleInputChange}
        />

        <label htmlFor="passport">Passport</label>
        <input
          type="text"
          name="passport"
          value={passport}
          placeholder="Passport"
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? "Update" : "Add"} />
        <Link to="/Client">
          <button type="button">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default AddEditClient;