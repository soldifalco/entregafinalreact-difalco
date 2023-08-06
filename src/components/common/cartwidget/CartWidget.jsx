import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <>
      <Link to="/cart">
        <Badge badgeContent={total} showZero style={{ color: "yellow" }}>
          <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
        </Badge>
      </Link>
    </>
  );
};

export default CartWidget;
