import { Link } from "react-router-dom";
import { ImageMaker } from "@components";
import logo from "../../../assets/images/navbar/logo.svg";
const NavLogo = () => {
  return (
    <Link
      to="/"
      className="Logo display-flex align-center"
    >
      <ImageMaker src={logo} alt={logo} />
    </Link>
  );
};
export default NavLogo;
