import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Additems.css";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/bikedata`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  return (
    <div className="container form ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-50"
          type="text"
          placeholder="product title"
          {...register("name")}
        />
        <br></br>
        <input
          className="w-50"
          type="text"
          placeholder="description"
          {...register("Descriptiion")}
        />
        <br></br>{" "}
        <input
          className="w-50"
          type="text"
          placeholder="image url"
          {...register("image")}
        />
        <br></br>{" "}
        <input
          className="w-50"
          type="number"
          placeholder="price"
          {...register("price")}
        />
        <br></br>{" "}
        <input
          className="w-50"
          type="number"
          placeholder="Quantity"
          {...register("quantity")}
        />
        <br></br>
        <input
          className="w-50"
          type="text"
          placeholder="supplier"
          {...register("supplier")}
        />
        <br></br>
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItems;
