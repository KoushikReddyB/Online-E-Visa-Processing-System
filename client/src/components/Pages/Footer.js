import React from 'react';

const Footer = () => {
  return (
    <div style={{ marginTop: "10%" }}>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Sign up for inquiries
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              <b>"Experience Hassle-Free Travel with Us"</b>
            </p>
          </section>

        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Online E-Visa Processing. All rights reserved. KL UNIVERSITY - Section 31.
        </div>
      </footer>
    </div>
  )
}

export default Footer;
