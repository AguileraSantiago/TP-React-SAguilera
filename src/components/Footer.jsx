import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-4 footer">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">Mercado Liebre</p>
            <p className="mb-0">Calle Falsa 123, Planeta Tierra</p>
          </Col>
          <Col md={6}>
            <div>
              <a
                href="https://github.com/AguileraSantiago"
                target="blank"
                className="text-white me-3"
              >
                <i className="fa fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-aguilera99/"
                target="blank"
                className="text-white"
              >
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
