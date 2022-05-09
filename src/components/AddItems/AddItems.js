import React from "react";
import { Form } from "react-bootstrap";
const addItemToDb = (e) => {
  e.preventDefault();
};
const AddItems = () => {
  return (
    <div className="container form ">
      <Form className="form-containers">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={2}
            name="description"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Image url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Quantity" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Supplier Name" />
        </Form.Group>
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default AddItems;
