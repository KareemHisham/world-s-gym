import "./Navbar.css";
import Logo from "../../../assets/images/Logo.png";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-content">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <ul className="list-unstyled">
            <li className="nav-item me-2">
              <NavLink to="/" className="text-decoration-none text-capitalize">
                home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
