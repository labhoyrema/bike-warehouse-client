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
  console.log(store.name);
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
            // <Col key={store._id} className="mb-5">
            //   <Card>
            //     <Card.Img variant="top" src={store.image} />
            //     <Card.Body>
            //       <Card.Title>name:{store.name}</Card.Title>
            //       <Card.Text>{store.Descriptiion}</Card.Text>
            //       <Card.Text>Price: {store.price}</Card.Text>
            //       <Card.Text>Quantity: {store.quantity}pc</Card.Text>
            //       <Card.Text>Supplier: {store.supplier}</Card.Text>
            //       <button onClick={() => navigate("manageinventory")}>
            //         Submit
            //       </button>
            //     </Card.Body>
            //   </Card>
            // </Col>
          ))}
        </Row>
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
