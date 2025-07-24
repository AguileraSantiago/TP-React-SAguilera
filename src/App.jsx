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
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AgregarProducto from "./components/AgregarProducto";

function App() {
  return (
    <CarritoProvider>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/home/agregar"
                element={
                  <PrivateRoute>
                    <AgregarProducto />
                  </PrivateRoute>
                }
              />
              <Route
                path="/ofertas"
                element={
                  <PrivateRoute>
                    <Ofertas />
                  </PrivateRoute>
                }
              />
              <Route
                path="/infaltables"
                element={
                  <PrivateRoute>
                    <Infaltables />
                  </PrivateRoute>
                }
              />
              <Route
                path="/carrito"
                element={
                  <PrivateRoute>
                    <Carrito />
                  </PrivateRoute>
                }
              />
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
