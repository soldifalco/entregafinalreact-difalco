import { useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : Swal.fire({
          position: "center",
          icon: "warning",
          title: "cantidad máxima superada",
          background: " rgb(152, 96, 204)",
          iconColor: "darkgoldenrod",
          color: "cornsilk",
          confirmButtonColor: "darkgoldenrod",
          timer: 1500,
          toast: true,
        });
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
