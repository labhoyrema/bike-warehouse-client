import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cards from "../Card/Card";

import "./Home.css";

const Home = () => {
  const [store, setStore] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/bikedata")
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);

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
      <div className="container">
        <h1 className="heading-text">Stored Products</h1>
        <Row xs={1} md={3} className="g-4 mt-5 mb-5">
          {store.slice(0, 6).map((store) => (
            <Cards key={store._id} store={store} />
          ))}
        </Row>
      </div>

      <div className="banner-bg">
        <div className="bg-color">
          <div className="container">
            <Row md={1}>
              <Col className="banner-text">
                <h4>Reach your destination 100% sure and safe</h4>
                <p>
                  We designed a detailed homepage layouts that will fit any
                  transportation industry size. We will take care of your cargo{" "}
                  <br></br>or your pasenger and deliver them safe and on time!
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <section className="container">
        <h2 className="heading-text">OUR SERVICES</h2>

        <div className="service-section">
          <div className="service-card">
            <div className="card-sr">
              <h4>Packaging and storage</h4>
              <p>We can package and store your thinks.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-sr">
              <h4>GROUND TRANSPORT</h4>
              <p>
                Transport began providing transportation solutions to Transport’
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-sr">
              <h4>WAREHOUSING</h4>
              <p>Transport provides warehousing, fulfillment services,</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-sr">
              <h4>LOGISTIC SERVICE</h4>
              <p>
                Transport offers a host of logistic management services and
                supply chain solutions.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-sr">
              <h4>FREIGHT FORWARDING</h4>
              <p>With a global presence in 67 countries, TransCargo</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-sr">
              <h4>SUPPLY CHAIN SOLUTIONS</h4>
              <p>We can package and store your thinks.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
