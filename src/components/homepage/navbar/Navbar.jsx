import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
const Navbar = () => {
  return (
    <>
      <div className="navigation-wrap pointer-events-none">
        <nav className="navigation-bar bg-switch-on pointer-events-auto">
          <div className="container wide display-flex align-center t_justify-space-between">
            <NavLogo />
            <NavLinks />
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
