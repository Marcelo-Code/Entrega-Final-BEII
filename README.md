# Entrega Final BEII

## Descripción

El siguiente es un proyecto didáctico para el curso de Programación Backend II. El mismo provee una serie de APIs para el manejo de productos, carritos de compra, usuarios y tickets de compra.

## Endpoints

### Cart Endpoints

- `GET localhost:8080/api/carts`: devuelve todos los carritos (solamente perfil admin).
- `GET localhost:8080/api/carts/:cid`: devuelve un carrito por su ID (solamente el usuario logueado correspondiente).
- `PUT localhost:8080/api/carts/:cid/:pid`: agrega un producto al carrito del usuario correspondiente (solamente el perfil user correspondiente).

  - Parámetros:
    - `cid`: ID del carrito.
    - `pid`: ID del producto.

- Request Body:

  - `quantity`: cantidad.

### Product Endpoints

- `POST localhost:8080/api/products`: crea un nuevo producto (solamente perfil admin).
- Request Body:
  - `title`: título (string, required).
  - `description`: descripción (string, required).
  - `price`: precio (number, required).
  - `category`: categoría (string, required).
  - `stock`: stock (number, required).
- `GET localhost:8080/api/products`: devuelve todos los productos.
- `GET localhost:8080/api/products/:pid`: devuelve un producto por su ID.
  - Parámetros:
    - `pid`: ID del producto.
- `PUT localhost:8080/api/products/:pid`: actualiza un producto (sólo perfil admin).
  - Parámetros:
    - `pid`: ID del producto.
      Request Body:
    - `title`: título.
    - `description`: descripción.
    - `price`: precio.
    - `category`: categoría.
    - `stock`: stock.
- `DELETE localhost:8080/api/products/:pid`: elimina un producto (sólo perfil admin).
  - Parameters:
    - `pid`: ID del producto.

### Session Endpoints

1. `GET localhost:8080/api/sessions/current`: devuelve los datos del usuario activo (sólo perfil admin).
2. `POST localhost:8080/api/sessions/login`: login de usuario.
   - Request Body:
     - `email`: email de usuario (string, required).
     - `password`: password de usuario (string, required).
3. `POST localhost:8080/api/sessions/logout`: Logout de usuario.
4. `GET localhost:8080/api/sessions/profile`: devuelve el perfil del usuario (solamente el usuario logueado).
5. `POST localhost:8080/api/sessions/restore-password`: cambia el password de usuario.
   - Request Body:
     - `email`: email de usuario (string, required).
     - `password`: password de usuario (string, required).
     - `repeat_password`: repetición del nuevo password de usuario (string, required).

### Ticket Endpoints

- `POST localhost:8080/api/tickets/:cid`: crea un nuevo ticket de compra, finaliza una compra con los productos agregados al carrito previamente (solamente perfil user correspondiente). El stock de los productos disponibles se controla antes de agregar el producto al carrito y no al finalizar la compra.
  - Parameters:
    - `cid`: ID de carrito.
- `GET localhost:8080/api/tickets`: devuelve todos los tickets de compra (sólo perfil admin).
- `GET localhost:8080/api/tickets/:tid`: devuelve un ticket por su ID (sólo perfil admin).
  - Parameters:
    - `tid`: ID del ticket.

### User Endpoints

- `POST localhost:8080/api/users`: crea un nuevo usuario (registración).

  - Request Body:
    - `first_name`: nombre (string, required).
    - `last_name`: apellido (string, required).
    - `email`: email de usuario (string, required).
    - `age`: edad (number, required).
    - `password`: password (string, required).
      \_ `repeat_password`: repetir password.
    - `role`: perfil de usuario (type: String, default: "user").

- `GET localhost:8080/api/users`: devuelve todos los usuarios (sólo perfil admin).
- `GET localhost:8080/api/users/:uid`: devuelve un usuario por su ID (sólo perfil admin).

  - Parameters:
    - `uid`: ID de usuario.

- `PUT localhost:8080/api/users/:uid`: actualiza un usuario (solo perfil admin).

  - Parameters:
    - `uid`: ID de usuario.
  - Request Body:
  - `first_name`: nombre.
  - `last_name`: apellido.
  - `email`: email de usuario.
  - `age`: edad.
  - `role`: perfil de usuario.
