import { Card, Col, Form, Row } from "react-bootstrap";

import "./ManageInventory.css";
const ManageInventory = () => {
  return (
    <div className="container form ">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="" />
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
          </Card>
        </Col>
        <Col>
          <Form className="form-containers">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={2} placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Image url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Quantity" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Supplier Name" />
            </Form.Group>
            <button>Submit</button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ManageInventory;
