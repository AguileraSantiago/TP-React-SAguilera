import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [category]);

  const handleAgregarAlCarrito = (product) => {
    alert(`Producto ${product.title} agregado al carrito`);
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="grid-productos">
      {products.map((product) => (
        <div key={product.id} className="producto-card">
          <ProductCard
            product={product}
            agregarAlCarrito={handleAgregarAlCarrito}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
