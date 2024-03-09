import React from "react";
import "./styles/Home.css";
import Slider from "./Slider";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="mb-4">Welcome to the Online E-Visa Processing System</h1>
            <p className="lead">
              Apply for your e-visa hassle-free and securely with our online platform.
              Explore various visa options, check your eligibility, and submit your application
              with ease.
            </p>
            <a href="/apply" className="btn btn-primary btn-lg mt-3">Apply Now</a>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-4">
            <div className="card border-0 shadow text-center">
              <img
                src={require("../../images/visa_processing.jpeg")}
                className="card-img-top"
                alt="Visa Processing"
              />
              <div className="card-body">
                <h2 className="card-title">Fast Visa Processing</h2>
                <p className="card-text">
                  Our streamlined visa processing system ensures quick turnaround time
                  for your visa applications.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow text-center">
              <img
                src={require("../../images/secure_payment.avif")}
                className="card-img-top"
                alt="Secure Payment"
              />
              <div className="card-body">
                <h2 className="card-title">Secure Payment</h2>
                <p className="card-text">
                  We prioritize the security of your payments. Our platform employs
                  industry-standard encryption to safeguard your financial information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <h2>Why Choose Us?</h2>
            <p>
              Choose the E-Visa Processing System for its convenience, security, and efficiency. Our platform simplifies the visa application process, ensures the safety of your personal information, and expedites the issuance of visas for hassle-free travel.
            </p>
            <a href="/about" className="btn btn-outline-primary">Learn More</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
