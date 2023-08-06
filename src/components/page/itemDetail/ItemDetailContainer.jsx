import { useState, useEffect } from "react";
import { productos } from "../../../js/data";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoriaid } = useParams();

  useEffect(() => {
    let productosFiltrados = productos.filter(
      (elemento) => elemento.categoría === categoriaid
    );
    const data = new Promise((resolve) => {
      resolve(categoriaid === undefined ? productos : productosFiltrados);
    });
    data.then((respuesta) => setItems(respuesta));
  }, [categoriaid]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
