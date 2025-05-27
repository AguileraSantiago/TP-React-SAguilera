import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <Card className="h-100 d-flex flex-column">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="card-img-top img-fluid"
        style={{ height: "200px", width: "100%", objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text
          style={{
            marginTop: "auto",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          ${product.price}
        </Card.Text>
        <Button
          as={Link}
          to={`/producto/${product.id}`}
          variant="primary"
          className="ver-detalles"
        >
          Ver detalles
        </Button>

        <Button
          variant="primary"
          className="mt-2"
          onClick={() => {
            agregarAlCarrito(product);
            Swal.fire({
              icon: "success",
              title: "Producto agregado",
              text: `${product.title} se añadió al carrito`,
              timer: 2000,
              showConfirmButton: false,
            });
          }}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
