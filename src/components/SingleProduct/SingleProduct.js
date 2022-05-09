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
  const updateQuantity = (e) => {};

  return (
    <div className="container form ">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Price:55$</Card.Text>
              <Card.Text>Quantity:55</Card.Text>
              <Card.Text>Supplier</Card.Text>
            </Card.Body>
            <button>delivered</button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SingleProduct;
