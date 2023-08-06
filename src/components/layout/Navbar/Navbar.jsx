import { Link } from "react-router-dom";

import CartWidget from "../../common/cartwidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div>
        <div className={"containerNavbar"}>
          <Link to="/">
            <h4>MonkeyRock</h4>
          </Link>

          <ul className="categories">
            <Link className="categories-link" to="/">
              Todas
            </Link>
            <Link className="categories-link" to="/categoría/Niños">
              Niños
            </Link>
            <Link className="categories-link" to="/categoría/Mujeres">
              Mujeres
            </Link>
            <Link className="categories-link" to="/categoría/Hombres">
              Hombres
            </Link>
          </ul>

          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
