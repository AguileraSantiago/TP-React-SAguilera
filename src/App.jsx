import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Ofertas from "./components/Ofertas";
import Infaltables from "./components/Infaltables";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito";
import DetalleProducto from "./components/DetalleProducto";
import { CarritoProvider } from "./context/CarritoContext";

function App() {
  return (
    <CarritoProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/ofertas" element={<Ofertas />} />
              <Route path="/infaltables" element={<Infaltables />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/producto/:id" element={<DetalleProducto />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CarritoProvider>
  );
}

export default App;
