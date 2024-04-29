import { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)  
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    setWindowWidth(window.innerWidth)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  function handleClick() {
    setMenu(!menu)
  }

  const toggleMenu = {
    display: menu || windowWidth >= 976 ? 'flex' : 'none'
  }

  return (
    <nav className="navbar">
      <img src={logo} alt="Shortly Logo" />
      <div className="navbar--mobile" style={toggleMenu}>
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
