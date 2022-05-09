import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { singleProductId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/bikedata/${singleProductId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  // const updateQuantity = (e) => {
  //   // const update = e.target.number.value;
  //   const newQuantity = product.quantity + update;
  //   console.log(update);

  //   const url = `http://localhost:5000/bikedata/${singleProductId}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newQuantity),
  //   });
  //

  return (
    <div className="container form ">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.Descriptiion}</Card.Text>
              <Card.Text>{product.price}</Card.Text>
              <Card.Text>Quantity:{product.quantity}</Card.Text>
              <Card.Text>Supplier{product.supplier}</Card.Text>
            </Card.Body>

            <button>delivered</button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SingleProduct;
