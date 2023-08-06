import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "productos");
    let consulta;
    if (categoryName) {
      consulta = query(
        productsCollection,
        where("categoría", "==", categoryName)
      );
    } else {
      consulta = productsCollection;
    }

    getDocs(consulta).then((res) => {
      console.log(res.docs);
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setItems(productos);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <PacmanLoader color="yellow" size={30} />
      </div>
    );
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
