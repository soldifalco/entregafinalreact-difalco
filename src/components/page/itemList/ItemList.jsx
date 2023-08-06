import ProductosCard from "../../common/productosCard/ProductosCard";
import "./Item.css";

const ItemList = ({ items }) => {
  return (
    <div>
      <div className="title-logo">
        <h2>Unite al estilo Monkey</h2>
        <img
          className="logo"
          src="https://res.cloudinary.com/dtadbvbgl/image/upload/v1691007514/mono-gafas-sol-camiseta-que-dice-mono_759791-790_yr98nj.jpg"
          alt="logo"
        />
        <h2>
          Te brindamos remeras para todas las edades y de todos los talles
        </h2>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.map((elemento) => {
          return <ProductosCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
