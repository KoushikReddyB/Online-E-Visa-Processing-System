import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import axios from 'axios';
import "./styles/About.css";

const About = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getreviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div>
      <section className="">
        <div className="row py-4" style={{ backgroundColor: "rgb(246, 246, 246)" }}>
          <div className="col-lg-12 align-items-center d-flex justify-content-center">
            <h2>About Our E-Visa Processing System</h2>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 align-items-center d-flex justify-content-center" style={{ marginTop: "20px" }}>
              <h2>About Our E-Visa Service</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 align-items-center d-flex justify-content-center">
              <h5>Our Goals and Values</h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 align-items-center d-flex justify-content-center">
            <img src={require("../../images/visa_processing.jpeg")} width="950" style={{ borderRadius: '20px' }} height="650" alt="Visa Processing" />
          </div>

          <div className="col-lg-6" style={{ paddingTop: "150px" }}>
            <p style={{ fontSize: "25px", marginLeft: "10px" }}>
              Our focus is on simplifying your visa application process and ensuring a smooth journey ahead. We provide state-of-the-art facilities to make your visa processing experience seamless.
            </p>
            <br />
            <br />
            <div className="row">
              <div className="col-lg-1">
                <img src={require("../../images/mission.jpg")} height="80px" width="70px" alt="Mission" />
              </div>
              <div className="col-lg-6">
                <b style={{ fontSize: "25px" }}>Our Mission</b>
                <p style={{ fontSize: "20px" }}>
                  To provide efficient, reliable, and user-friendly e-visa processing services.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-lg-1">
                <img src={require("../../images/team.jpeg")} height="65px" width="70px" alt="Team" />
              </div>
              <div className="col-lg-6">
                <b style={{ fontSize: "25px" }}>Our Team</b>
                <p style={{ fontSize: "20px" }}>
                  Comprised of professionals dedicated to ensuring a high-quality e-visa application experience for every traveler.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>

      <br />
      <br />

      <section className="">
        <div className="row" style={{ paddingBottom: "20px" }}>
          <div className="col-lg-6 align-items-center d-flex justify-content-center ">
            <h1 style={{ textAlign: 'center' }}>Apply for your E-Visa and<br /> experience hassle-free travel</h1>
          </div>

          <div className="col-lg-6 align-items-center d-flex justify-content-center ">
            <img src={require("../../images/apply_visa.jpg")} width="1200px" style={{ borderRadius: "20px" }} alt="Apply for E-Visa" />
          </div>
        </div>
      </section>
      <br></br>
      <section className="py-5 ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 align-items-center d-flex justify-content-center">
              <h2>
                <strong style={{ fontSize: "35px" }}>Client Testimonials</strong>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 align-items-center d-flex justify-content-center">
              <p style={{ color: "grey", fontSize: '30px' }}>What our clients say about us</p>
            </div>
          </div>
        </div>

        <Carousel style={{ height: '200px' }}>
          {reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <p className="align-items-center d-flex justify-content-center" style={{ fontSize: '25px' }}>
                {review.fname} {review.lname}: {review.review}
              </p>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="">
        <div className="row">
          <div className="col-lg-6 align-items-center d-flex justify-content-center" style={{ width: "1000px", height: "700px", marginRight: "0", marginLeft: "70px" }}>
            <video className="w-100" autoPlay loop muted>
              <source src={require("../../images/Visa-Process.jpg")} type="video/mp4" />
            </video>
          </div>
          <div className="col-lg-6 align-items-center d-flex justify-content-center">
            <div className="white border-0" style={{ width: "35rem" }}>
              <h2>
                <strong style={{ fontSize: "35px", marginLeft: "0px" }}>
                  Simplify Your Travel Experience
                </strong>
              </h2>

              <div className="card-body white border-0">
                <p style={{ fontSize: "22px" }}>
                  Our E-Visa Processing System is designed to ensure your comfort and convenience throughout your journey. Experience hassle-free visa application and embark on your adventure stress-free.
                </p>
                <button
                  type="button"
                  className="btn btn-success"
                  style={{ fontSize: "22px", padding: "10px" }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
