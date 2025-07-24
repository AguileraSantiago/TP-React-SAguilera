// src/components/AgregarProducto.jsx
import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";

const AgregarProducto = () => {
  const [producto, setProducto] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, description, image } = producto;

    if (!title.trim()) {
      toast.error("El nombre es obligatorio");
      return;
    }
    if (Number(price) <= 0) {
      toast.error("El precio debe ser mayor a 0");
      return;
    }
    if (description.trim().length < 10) {
      toast.error("La descripción debe tener al menos 10 caracteres");
      return;
    }

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title,
        price: Number(price),
        description,
        image,
        category: "inflatables",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Producto agregado con éxito");
        setProducto({ title: "", price: "", description: "", image: "" });
      })
      .catch(() => toast.error("Error al agregar producto"));
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "500px" }}>
        <Card.Body>
          <Card.Title className="mb-4">Agregar Producto</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Controln
                type="text"
                placeholder="Nombre del producto"
                name="title"
                value={producto.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Precio"
                name="price"
                value={producto.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción"
                name="description"
                value={producto.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="URL de imagen"
                name="image"
                value={producto.image}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="success" className="w-100">
              Agregar Producto
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AgregarProducto;
