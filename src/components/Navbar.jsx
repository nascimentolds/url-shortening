import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menu, setMenu] = useState(false)

  function handleClick() {
    setMenu(!menu)
  }

  const openMenu = {
    display: menu ? 'flex' : 'none'
  }

  return (
    <nav className="navbar">
      <img src={logo} alt="Shortly Logo" />
      <div className="navbar--mobile" style={openMenu}>
        <ul className="navbar--nav">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>

        <div className="navbar--login">
          <a href="#">Login</a>
          <a className="button-rounded-full" href="#">
            Sign Up
          </a>
        </div>
      </div>
      <button className="navbar--menu-icon" onClick={handleClick}>
        {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </nav>
  );
}
