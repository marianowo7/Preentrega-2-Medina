import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Ecommerce</h3>
      </Link>

      <div className="Categories">
        <NavLink
          to={"/category/KB"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Teclados
        </NavLink>
        <NavLink
          to={"/category/MOUSE"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Mouse
        </NavLink>
        <NavLink
          to={"/category/AU"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Auriculares
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
