import "./styles/navbarShort.css";
import { FaBars, FaSearchengin } from "react-icons/fa";

export default function NavbarShort() {
  return (
    <div className="nav-container">
      <FaBars className="icons" size={35} />
      <a href = "/home"><img src="https://www.bain.com/contentassets/0b88e3e10a7b4592809517c28b75847e/logo_red_bain.svg" /></a>
      <FaSearchengin className="icons" size={35} />
    </div>
  );
}
