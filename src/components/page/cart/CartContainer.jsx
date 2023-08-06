import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      color: "cornsilk",
      confirmButtonColor: "darkgoldenrod",
      denyButtonColor: "darkgoldenrod",
      confirmButtonText: "Si",
      denyButtonText: "no",
      background: "rgb(152, 96, 204)",
      toast: true,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "tu carrito se eliminó ",
          background: "rgb(152, 96, 204)",
          icon: "warning",
          color: "cornsilk",
          iconColor: "cornsilk",
          confirmButtonColor: "darkgoldenrod",
          toast: true,
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "tu carrito no se vació",
          background: "rgb(152, 96, 204)",
          icon: "success",
          iconColor: "cornsilk",
          color: "cornsilk",
          confirmButtonColor: "darkgoldenrod",
          toast: true,
        });
      }
    });
  };

  return (
    <div>
      <h3 className="title-carrito">Mi carrito</h3>
      {cart.map((elemento) => {
        return (
          <div className="carrito-container" key={elemento.id}>
            <img className="carrito-imagen" src={elemento.imagen} alt="" />
            <h4 className="carrito-titulo">{elemento.titulo}</h4>
            <h5 className="carrito-precio"> $ {elemento.precio}</h5>
            <h5 className="carrito-cantidad">{elemento.cantidad}</h5>
            <button
              className="carrito-eliminar"
              onClick={() => deleteById(elemento.id)}
            >
              Eliminar
            </button>
          </div>
        );
      })}
      <div className="total-compra">
        <h3>total de su compra: ${total}</h3>
        <Link to="/checkout">
          <Button
            style={{
              color: "yellow",
              border: "1px solid yellow",
              borderRadius: "10px",
              fontFamily: "fantasy",
              textShadow: "2px 2px 2px black",
              letterSpacing: "0.1rem",
              cursor: "pointer",
              margin: "1rem",
              backgroundColor: "rgba(0, 0, 0, 0.468)",
            }}
            size="small"
          >
            Finalizar compra
          </Button>
        </Link>
      </div>

      <div className="carritoLimpiar-container">
        {cart.length > 0 && (
          <button className="carrito-limpiar" onClick={limpiar}>
            Limpiar carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
