import React, { useContext } from "react";
import { Container, Row, Col, ListGroup, Button, Image } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, limpiarCarrito, actualizarCantidad } =
    useContext(CarritoContext);

  const handleEliminar = (id) => {
    eliminarDelCarrito(id);
    Swal.fire({
      icon: "info",
      title: "Producto eliminado",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  const handleVaciarCarrito = () => {
    limpiarCarrito();
    Swal.fire({
      icon: "warning",
      title: "Carrito vaciado",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleAumentar = (id) => {
    actualizarCantidad(id, 1);
  };

  const handleDisminuir = (id) => {
    actualizarCantidad(id, -1);
  };

  const total = carrito.reduce(
    (acc, producto) => acc + producto.price * producto.cantidad,
    0
  );

  if (carrito.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <img
          src="/carro-vacio.png"
          alt="Carrito vacío"
          style={{ width: "150px", marginBottom: "20px" }}
        />
        <h3>Tu carrito está vacío</h3>
        <p>Agregá productos para verlos aquí.</p>
        <Button variant="primary" as={Link} to="/">
          Ir a la tienda
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Carrito de compras</h2>
      <ListGroup variant="flush">
        {carrito.map((producto) => (
          <ListGroup.Item key={producto.id} className="py-3">
            <Row className="align-items-center flex-column flex-md-row">
              <Col xs={12} md={2} className="mb-2 mb-md-0 text-center">
                <Image
                  src={producto.image}
                  alt={producto.title}
                  fluid
                  rounded
                  style={{ maxHeight: "80px", objectFit: "contain" }}
                />
              </Col>
              <Col xs={12} md={4} className="mb-2 mb-md-0">
                {producto.title}
              </Col>
              <Col
                xs={12}
                md={3}
                className="d-flex justify-content-center justify-content-md-start align-items-center mb-2 mb-md-0"
              >
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleDisminuir(producto.id)}
                  disabled={producto.cantidad <= 1}
                  className="me-2 text-white"
                  style={{ borderColor: "white" }}
                >
                  Eliminar-
                </Button>
                <span className="mx-2">Cantidad: {producto.cantidad}</span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleAumentar(producto.id)}
                  className="ms-2 text-white"
                  style={{ borderColor: "white" }}
                >
                  Agregar+
                </Button>
              </Col>
              <Col
                xs={12}
                md={2}
                className="text-center text-md-start mb-2 mb-md-0"
              >
                <strong>
                  ${(producto.price * producto.cantidad).toFixed(2)}
                </strong>
              </Col>
              <Col xs={12} md={1} className="text-center">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleEliminar(producto.id)}
                  className="w-100"
                >
                  Eliminar
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
      <h4>Total: ${total.toFixed(2)}</h4>
      <div className="d-flex justify-content-left">
        <Button
          variant="danger"
          onClick={handleVaciarCarrito}
          className="mt-3 px-4"
        >
          Vaciar carrito
        </Button>
      </div>
    </Container>
  );
};

export default Carrito;
