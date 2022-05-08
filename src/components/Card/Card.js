import React from "react";
import { Card, Col } from "react-bootstrap";

const Cards = ({ store }) => {
  console.log(store);
  const { name, image, Descriptiion, price, supplier, quantity } = store;
  return (
    <>
      <Col className="mb-5">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>name:{name}</Card.Title>
            <Card.Text>{Descriptiion}</Card.Text>
            <Card.Text>Price:{price}</Card.Text>
            <Card.Text>Quantity:{quantity}pcs</Card.Text>
            <Card.Text>Supplier:{supplier}</Card.Text>
            <button>Submit</button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Cards;
