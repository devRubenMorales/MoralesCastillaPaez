import {Link} from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <img href=""></img>

      </div>
      <nav className="navBar">
        <Link to='/'> Agentes</Link>
        <Link to='/mapas'>Mapas</Link>
        <Link to='/Login'>Login</Link>

      </nav>
      </header>
  )
}
