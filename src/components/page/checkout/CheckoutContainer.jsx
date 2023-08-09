import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../FirebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import "./Checkout.css";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, getTotalPrice } = useContext(CartContext);

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    // creo la orden en firebase
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    // modifico el stock
    cart.forEach((producto) => {
      updateDoc(doc(db, "productos", producto.id), {
        stock: producto.stock - producto.cantidad,
      });
    });
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h3 className="formulario-title">Formulario de compra</h3>

      {orderId ? (
        <div className="orden-compra">
          <h3>Gracias por su compra!</h3>
          <h4>Su numero de comprar es: {orderId}</h4>
          <Link
            style={{
              color: "rgb(84, 50, 116)",
              backgroundColor: "burlywood",
              fontWeight: "600",
              padding: "5px",
              borderRadius: "10px",
              border: "2px solid",
              cursor: "pointer",
            }}
            to="/"
          >
            Volver a comprar
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <button className="btn-comprar" type="submit">
            Comprar
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutContainer;
