import { NavLink } from "react-router-dom";
import "./Navbar.css"
import logohome from "../../../public/logohome.png";
export default function Navbar() {
  return (
    <header>
      <nav className="navBar-container">
        <div className="image-container">
          <img src={logohome} alt="Valorant" />
        </div>
      <ul className="Card-Navbar">
        <li>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Agentes</NavLink>
        </li>
        <li>
        <NavLink to='/mapas'  className={({ isActive }) => (isActive ? 'active' : '')}>Mapas</NavLink>
        </li>
        <li>
        <NavLink to='/Login'  className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
        </li>
      </ul>
      </nav>
    </header>
  )
}