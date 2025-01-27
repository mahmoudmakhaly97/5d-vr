import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
const Navbar = () => {
  return (
    <nav className="navigation-bar  pointer-events-auto">
      <div className="container wide d-flex justify-content-between align-items-center">
      <Link to="/">
          <NavLogo />
        </Link>
        <NavLinks />  

    
      </div>
    </nav>
  );
};
export default Navbar;
