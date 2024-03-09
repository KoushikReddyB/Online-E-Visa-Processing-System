import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  country: "",
  duration: "",
  purpose: "",
};

const AddVisa = () => {
  const [visa, setVisa] = useState(initialState);
  const { country, duration, purpose } = visa;
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!country || !duration || !purpose) {
      toast.error("Required Fields are empty");
      return;
    }

    try {
      await Axios.post("http://localhost:5000/visa/api/post", visa);
      toast.success("Visa Added Successfully");
      setVisa(initialState);
      setTimeout(() => history.push("/Visa"), 500);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVisa({ ...visa, [name]: value });
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
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={country}
          placeholder="Country"
          required
          onChange={handleInputChange}
        />

        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          name="duration"
          value={duration}
          placeholder="Duration"
          onChange={handleInputChange}
        />

        <label htmlFor="purpose">Purpose</label>
        <input
          type="text"
          name="purpose"
          value={purpose}
          placeholder="Purpose"
          onChange={handleInputChange}
        />

        <input type="submit" value="Add" />
        <Link to="/Visa">
          <input type="button" value="Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddVisa;
