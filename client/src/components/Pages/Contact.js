import React from 'react';
import { useState } from 'react';
import './styles/Contact.css';
import Footer from './Footer';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'; // Import Font Awesome icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send contact form data to the server
    console.log(formData);
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <section className="poppins">
        <div className="row py-4" style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
          <div className="col-lg-3 align-items-center d-flex justify-content-center">
            <h2 style={{ marginRight: '-310%' }}>Contact Us</h2>
          </div>
        </div>
      </section>

      <section className="poppins">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 align-items-center d-flex justify-content-center">
              <h2 style={{ marginTop: '20px' }}>How to find us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 align-items-center d-flex justify-content-center grey-text">
              <h5>Address and Direction</h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6" style={{ margin: '0' }}>
            <img src={require('../../images/contact.jpg')} style={{ marginTop: '50px', marginLeft: '20px', marginRight: '0', borderRadius: '20px' }} width="850" height="550" alt="Visa Contact" />
          </div>

          <div className="col-lg-6" style={{ paddingTop: '150px' }}>
            <div className="row">
              <div className="col-lg-1">
                <FaMapMarkerAlt size={20} />
              </div>
              <div className="col-lg-6" style={{ marginLeft: '0' }}>
                <b style={{ fontSize: '25px' }}>Our Address</b>
                <br />
                <p className="grey-text" style={{ fontSize: '20px' }}>KL University, Guntur</p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-1">
                <FaPhone size={20} />
              </div>
              <div className="col-lg-6">
                <b style={{ fontSize: '25px' }}>Phone</b>
                <br />
                <p className="grey-text" style={{ fontSize: '20px' }}>+91 9014 9858 96</p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-1">
                <FaClock size={20} />
              </div>
              <div className="col-lg-6">
                <b style={{ fontSize: '25px' }}>Open Hours</b>
                <br />
                <p className="grey-text" style={{ fontSize: '20px' }}>Mon-Sat 8:00am-4:30pm</p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary "
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ fontSize: '25px', width: '1200px' }}
              >
                Contact Us
              </button>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3 mt-4">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3 mt-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3 mt-4">
                        <label className="form-label">Message</label>
                        <input
                          type="text"
                          className="form-control"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <section className="poppins">
        <div className="row">
          <div className="col-lg-6 align-items-center d-flex justify-content-center">
            <div
              className="white border-0 text-center"
              style={{ width: '35rem' }}
            >
              <h2>Our Address</h2>
              <h5>Providing a free visit of our offices</h5>
            </div>
          </div>
          <div className="col-lg-6 align-items-center d-flex justify-content-center" style={{ width: '1200px', margin: '0' }}>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6270932219935!2d67.0819069143597!3d24.851991184042218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3341488d3f5b3%3A0x6c2b09564a9c84eb!2sKarachi%20Airport!5e0!3m2!1sen!2s!4v1648120605364!5m2!1sen!2s"
              className="w-250"
              height="600"
              width="800"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
