import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./styles/AddEdit.css";
import Axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  visa_id: "",
  max_applicants: "",
};

const AddEditVisa = () => {
  const [state, setState] = useState(initialState);
  const { visa_id, max_applicants } = state;

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:5000/visa/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }))
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!visa_id || !max_applicants) {
      toast.error("Required fields are empty");
    } else {
      const visaData = {
        visa_id,
        max_applicants,
      };
      const url = id
        ? `http://localhost:5000/visa/api/update/${id}`
        : "http://localhost:5000/visa/api/post";

      const toastMessage = id ? "Visa Updated Successfully" : "Visa Added Successfully";

      const requestMethod = id ? Axios.put : Axios.post;

      requestMethod(url, visaData)
        .then((response) => {
          setState(initialState);
          if (response.data.err) console.error(response.data.err);
        })
        .catch((err) => toast.error(err.response.data));

      toast.success(toastMessage);
      setTimeout(() => history.push("/visas"), 500);
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
          placeholder="Visa ID"
          required
          onChange={handleInputChange}
        />

        <label htmlFor="max-applicants">Max Applicants</label>
        <input
          type="text"
          name="max_applicants"
          value={max_applicants || ""}
          placeholder="Max Applicants"
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? "Update" : "Add"} />
        <Link to="/visas">
          <input type="button" value="Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEditVisa;
