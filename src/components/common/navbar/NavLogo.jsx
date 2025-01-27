import { Link } from "react-router-dom";
import logo from "../../../assets/images/navbar/logo.svg";
const NavLogo = () => {
  return (
    <Link
      to="/"
      href="#"
      className="Logo display-flex align-center margin-right margin-large w-inline-block"
    >
      <img src={logo} alt={logo} className=" img-fluid " />
    </Link>
  );
};
export default NavLogo;
