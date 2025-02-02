import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
const Navbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 position-fixed w-100 z-index-2">
      <NavLogo />
      <NavLinks />
    </div>
  );
};
export default Navbar;
