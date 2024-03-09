import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./styles/AddEdit.css";
import Axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  visa_id: "",
  country: "",
  issue_date: "",
  expiry_date: "",
  purpose: "",
};

const EditVisa = () => {
  const [state, setState] = useState(initialState);
  const { visa_id, country, issue_date, expiry_date, purpose } = state;

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:5000/visa/api/get/${id}`).then((resp) =>
      setState({ ...resp.data[0] })
    );
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!visa_id || !country || !issue_date || !expiry_date || !purpose)
      toast.error("Required Fields are empty");
    else {
      Axios.put(`http://localhost:5000/visa/api/update/${id}`, {
        visa_id,
        country,
        issue_date,
        expiry_date,
        purpose,
      })
        .then((response) => {
          setState(initialState);
          if (response.data.err) console.log(response.data.err);
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("Visa Updated Successfully");
      setTimeout(() => history.push("/Visa"), 500);
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
        <label htmlFor="visa-id">Visa ID</label>
        <input
          type="text"
          name="visa_id"
          value={visa_id || ""}
          placeholder="ID"
          required
          onChange={handleInputChange}
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={country || ""}
          placeholder="Country"
          onChange={handleInputChange}
        />

        <label htmlFor="issue-date">Issue Date</label>
        <input
          type="text"
          name="issue_date"
          value={issue_date || ""}
          placeholder="Issue Date"
          onChange={handleInputChange}
        />

        <label htmlFor="expiry-date">Expiry Date</label>
        <input
          type="text"
          name="expiry_date"
          value={expiry_date || ""}
          placeholder="Expiry Date"
          onChange={handleInputChange}
        />

        <label htmlFor="purpose">Purpose</label>
        <input
          type="text"
          name="purpose"
          value={purpose || ""}
          placeholder="Purpose"
          onChange={handleInputChange}
        />
        <input type="submit" value="Update" />
        <Link to="/Visa">
          <input type="button" value="Back" />
        </Link>
      </form>
    </div>
  );
};

export default EditVisa;
