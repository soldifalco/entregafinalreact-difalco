import { productos } from "../../../data";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

productos;

const Dashboard = () => {
  const rellenar = () => {
    productos.forEach((producto) => {
      let refCollection = collection(db, "productos");
      addDoc(refCollection, producto);
    });
  };

  return (
    <div>
      <button onClick={rellenar}>Rellenar</button>
    </div>
  );
};

export default Dashboard;
