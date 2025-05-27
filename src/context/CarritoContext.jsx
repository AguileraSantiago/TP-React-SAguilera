import React, { createContext, useState, useEffect, useRef } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    try {
      const carritoGuardado = localStorage.getItem("carrito");
      console.log("Inicializando carrito desde localStorage:", carritoGuardado);
      return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    } catch (error) {
      console.error("Error leyendo carrito en localStorage", error);
      return [];
    }
  });

  const isPrimeraCarga = useRef(true);

  useEffect(() => {
    if (isPrimeraCarga.current) {
      // Primer render, no guardamos para evitar sobreescritura
      isPrimeraCarga.current = false;
      return;
    }
    console.log("Guardando carrito en localStorage:", carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  const actualizarCantidad = (id, cantidadCambio) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, cantidad: Math.max(p.cantidad + cantidadCambio, 1) }
          : p
      )
    );
  };

  const totalProductos = carrito.reduce((acc, p) => acc + p.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        limpiarCarrito,
        actualizarCantidad,
        totalProductos,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
