import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { HiTrash } from "react-icons/hi";

const MyItems = () => {
  const [store, setStore] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/bikedata")
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);
  const handleDelteData = (id) => {
    const proceed = window.confirm("are you sure to delete");
    const url = `http://localhost:5000/bikedata/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const updatedData = store.filter((store) => store._id !== id);
          setStore(updatedData);
        }
      });
  };

  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>number</th>
            <th>Image</th>
            <th>name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>

        {store.map((store) => (
          <tbody key={store._id}>
            <tr>
              <td>
                <img className="t-img" src={store.image} alt="" />
              </td>
              <td>{store.name}</td>
              <td>{store.price}</td>
              <td>{store.quantity} pcs</td>
              <td>Supplier:{store.supplier}</td>
              <td>
                <HiTrash
                  className="delete-icon"
                  onClick={() => handleDelteData(store._id)}
                />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyItems;
