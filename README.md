# Mercado Liebre - README

## Descripción

Mercado Liebre es una aplicación web sencilla de e-commerce creada con React y React Bootstrap.  
Permite a los usuarios:

- Iniciar sesión (simulado sin backend real).
- Navegar por diferentes secciones: Home, Ofertas, Imperdibles.
- Agregar productos mediante un formulario.
- Visualizar y administrar un carrito de compras protegido por login.
- Cerrar sesión para terminar la sesión actual.

## Tecnologías utilizadas

- React 18+
- React Router DOM (v6)
- React Bootstrap
- React Toastify (notificaciones)
- Context API para manejo global de estado (auth, carrito, productos)
- Fetch API para simulación de envío de productos (fake API)

## Estructura principal

- `src/components`: Componentes reutilizables como Header, Footer, Login, Carrito, AgregarProducto, etc.
- `src/context`: Contextos React para manejo de autenticación (`AuthContext`), carrito (`CarritoContext`).
- `src/App.jsx`: Configuración de rutas y estructura principal de la app.
- `public`: Archivos estáticos como logo.

## Instalación

Clonar repositorio

``bash
git clone https://github.com/tu-usuario/mercado-liebre.git
cd mercado-liebre


Instalar dependencias

``bash
npm install

Ejecutar en modo desarrollo

``bash
npm start

La aplicación estará disponible en http://localhost:3000.

Uso
Login
Ingresar un email y contraseña (simulado).

Al iniciar sesión, se guarda el usuario en sessionStorage para mantener la sesión mientras la pestaña esté abierta.

Si la pestaña/navegador se cierra, se pierde la sesión.

Navegación
La barra superior (Header) tiene enlaces a Home, Ofertas, Imperdibles, Agregar Producto, Carrito y Login/Logout.

La ruta /productos/agregar permite agregar productos nuevos a través de un formulario.

Carrito
El carrito está protegido: sólo usuarios logueados pueden acceder.

Muestra la cantidad total de productos y permite gestionar el contenido.

Agregar producto
El formulario valida nombre, precio y descripción.

Al enviar, simula el guardado en una API fake (https://fakestoreapi.com/products).

Al agregar con éxito, limpia el formulario y muestra notificación.

Contextos
AuthContext: Gestiona la sesión del usuario, login, logout y persistencia en sessionStorage.

CarritoContext: Maneja los productos agregados al carrito, cantidad total, y acciones de agregar/remover.
