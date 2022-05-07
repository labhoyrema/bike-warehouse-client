import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="heading-img">
        <div className="overlay">
          <div className="container">
            <div className="hero-text">
              <h2 className="hero-heading">
                Why choose our warehousing service
              </h2>
              <p>
                We take pride in catering to a broad range of clientele
                throughout the country with our warehousing services, which is
                comprehensive, reliable and flexible – qualities that are
                essential to help businesses in this market. Our experienced
                experts …
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container card-container">
        <div className="card">
          <img src="" alt="" />
          <h5>heading text</h5>
          <p>Quantity:</p>
          <div className="btn">
            <button>delivered</button>
            <button>update</button>
          </div>
        </div>
        <div className="card">
          <img src="" alt="" />
          <h5>heading text</h5>
          <p>Quantity:</p>
          <div className="btn">
            <button>delivered</button>
            <button>update</button>
          </div>
        </div>

        <div className="card">
          <img src="" alt="" />
          <h5>heading text</h5>
          <p>Quantity:</p>
          <div className="btn">
            <button>delivered</button>
            <button>update</button>
          </div>
        </div>
      </div>
      <section className="container">
        <h2>OUR SERVICES</h2>
        <div className="service-section">
          <div className="service-card">
            <div className="card-sr">
              <h4>Packaging and storage</h4>
              <p>We can package and store your thinks.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-sr">
              <h4>Packaging and storage</h4>
              <p>We can package and store your thinks.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-sr">
              <h4>Packaging and storage</h4>
              <p>We can package and store your thinks.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-sr">
              <h4>Packaging and storage</h4>
              <p>We can package and store your thinks.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-sr">
              <h4>Packaging and storage</h4>
              <p>We can package and store your thinks.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-sr">
              <h4>Packaging and storage</h4>
              <p>We can package and store your thinks.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
