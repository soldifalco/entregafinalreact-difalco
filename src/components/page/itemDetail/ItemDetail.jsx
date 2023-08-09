import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../FirebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [producto, setProducto] = useState({});

  const { id } = useParams();

  const totalQuantity = getQuantityById(id);
  console.log(totalQuantity);

  useEffect(() => {
    let productsCollection = collection(db, "productos");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, cantidad: cantidad };
    addToCart(productCart);

    //sweet alert producto agregado:

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado",
      background: " rgb(152, 96, 204)",
      iconColor: "darkgoldenrod",
      color: "cornsilk",
      confirmButtonColor: "darkgoldenrod",
      timer: 1500,
      toast: true,
    });
  };

  return (
    <div className="detalle">
      <h2 className="detalle-titulo">{producto.titulo}</h2>
      <img className="detalle-imagen" src={producto.imagen} alt="" />
      <h4 className="detalle-precio"> $ {producto.precio}</h4>
      <h4 className="detalle-descripcion">{producto.descripción}</h4>

      {(typeof totalQuantity === "undefined" ||
        producto.stock > totalQuantity) &&
        producto.stock > 0 && (
          <CounterContainer
            stock={producto.stock}
            onAdd={onAdd}
            initial={totalQuantity}
          />
        )}

      {producto.stock === 0 && <h2>No hay stock</h2>}

      {typeof totalQuantity !== "undefined" &&
        totalQuantity === producto.stock && (
          <h2>tenes las maximas cantidades en el carrito</h2>
        )}
    </div>
  );
};

export default ItemDetail;
