import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existe = isInCart(item.id);

    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === item.id) {
          return { ...elemento, cantidad: item.cantidad };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.precio * elemento.cantidad;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    const product = cart.find((elemento) => elemento.id === +id);
    return product?.cantidad;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
