import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Card, Form, Button } from "react-bootstrap";

const Login = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() !== "") {
      login(nombre); // 👈 esto guarda el nombre en el contexto
      navigate("/home"); // redirigimos al home
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card style={{ width: "350px" }}>
        <Card.Body>
          <Card.Title className="mb-4 text-center">Iniciar sesión</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Iniciar sesión
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
