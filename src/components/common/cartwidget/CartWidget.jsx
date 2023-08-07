import { BsCartCheck } from "react-icons/bs";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <>
      <Link to="/cart">
        <BsCartCheck color="yellow" size={30} />
        <span>{total}</span>
      </Link>
    </>
  );
};

export default CartWidget;
