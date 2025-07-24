import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CarritoContext } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { totalProductos } = useContext(CarritoContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="mb-4"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center text-white"
        >
          <img
            src="/buy.png"
            alt="Logo"
            style={{ height: "40px", width: "auto" }}
            className="d-inline-block align-top me-2"
          />
          <span>Mercado Liebre</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/home" className="me-3 text-white">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/ofertas" className="me-3 text-white">
            Ofertas
          </Nav.Link>
          <Nav.Link as={Link} to="/infaltables" className="me-3 text-white">
            Imperdibles
          </Nav.Link>
          <Link to="/home/agregar" className="btn btn-primary me-3">
            Agregar Producto
          </Link>

          {user ? (
            <>
              <span className="me-3 text-white fw-bold">
                Bienvenido, {user.email}
              </span>
              <Button variant="outline-danger" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </>
          ) : (
            <Button variant="outline-light" as={Link} to="/" className="me-3">
              Login
            </Button>
          )}

          <Link to="/carrito" className="text-white position-relative ms-3">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {totalProductos > 0 && (
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {totalProductos}
              </Badge>
            )}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
