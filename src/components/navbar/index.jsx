import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
function Navbar() {
     return (
          <nav className="navbar">
               <Link to="/" className="navbar-logo">
                    <img
                         src={logo}
                         className="navbar-img"
                         alt="logo de l'app"
                    />
                    <p>HRnet</p>
               </Link>
               <ul className="navbar-links">
                    <li>
                         <Link to="/employees">Employees</Link>
                    </li>
                    <li>
                         <Link to="/create-employee">Add Employee</Link>
                    </li>
               </ul>
          </nav>
     );
}

export default Navbar;
