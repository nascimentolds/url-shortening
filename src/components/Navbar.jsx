import logo from "../assets/images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Shortly Logo" />
      <div className="navbar--mobile">
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
      <AiOutlineMenu className="navbar--menu-icon" />
    </nav>
  );
}
