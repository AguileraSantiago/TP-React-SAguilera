import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import {
  Button,
  Spinner,
  Alert,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useContext(CarritoContext);

  useEffect(() => {
    const fetchProducto = async () => {
      setCargando(true);
      setError(null);

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Producto no encontrado");
        }
        const data = await response.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (cargando) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status" />
        <span className="ms-2">Cargando producto...</span>
      </div>
    );
  }

  if (error) {
    return (
      <Container className="text-center my-5">
        <Alert variant="danger">{error}</Alert>
        <Link to="/">
          <Button variant="primary">Volver a la tienda</Button>
        </Link>
      </Container>
    );
  }

  if (!producto) {
    return (
      <Container className="text-center my-5">
        <p>Producto no encontrado.</p>
        <Link to="/">
          <Button variant="primary">Volver a la tienda</Button>
        </Link>
      </Container>
    );
  }

  const handleAgregar = () => {
    agregarAlCarrito({
      id: producto.id.toString(),
      title: producto.title,
      description: producto.description,
      price: producto.price,
      image: producto.image,
    });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src={producto.image}
              alt={producto.title}
              style={{ height: "300px", objectFit: "contain", padding: "1rem" }}
            />
            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>
              <Card.Text>{producto.description}</Card.Text>
              <Card.Text>
                <strong>Precio:</strong> ${producto.price}
              </Card.Text>
              <div className="d-flex gap-2">
                <Button
                  variant="success"
                  onClick={handleAgregar}
                  className="btn-primary"
                >
                  Agregar al carrito
                </Button>
                <Link to="/home">
                  <Button variant="secondary">Volver a la tienda</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
