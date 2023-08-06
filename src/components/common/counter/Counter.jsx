const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "40px",
        borderRadius: "10px",
        margin: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="btn-contador-container">
        <button className="btn-sumar" onClick={sumar}>
          Sumar
        </button>
        <h3 className="btn-contador">{contador}</h3>
        <button className="btn-restar" onClick={restar}>
          Restar
        </button>

        <button className="agregar-cart" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
