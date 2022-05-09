import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Cards = ({ store }) => {
  const navigate = useNavigate();

  const { _id, name, image, Descriptiion, price, supplier, quantity } = store;

  const singleProduct = (id) => {
    navigate(`/singleProduct/${id}`);
  };
  return (
    <>
      <Col className="mb-5">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{Descriptiion.slice(0, 100)}</Card.Text>
            <Card.Text>Price:{price}</Card.Text>
            <Card.Text>Quantity:{quantity}pcs</Card.Text>
            <Card.Text>Supplier:{supplier}</Card.Text>
            <button className="card-btn" onClick={() => singleProduct(_id)}>
              Update
            </button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Cards;
