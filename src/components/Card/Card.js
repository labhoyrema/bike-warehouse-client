import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
            <Card.Title>name:{name}</Card.Title>
            <Card.Text>{Descriptiion.slice(0, 150)}</Card.Text>
            <Card.Text>Price:{price}</Card.Text>
            <Card.Text>Quantity:{quantity}pcs</Card.Text>
            <Card.Text>Supplier:{supplier}</Card.Text>
            <button onClick={() => singleProduct(_id)}>Submit</button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Cards;
