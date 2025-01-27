import user from "../../../assets/images/navbar/user-icon.svg";
import Button from "../Button";
import { navData } from "./NavData";
import NavItem from "./NavItem";
import Offcanvas from "./Offcanvas";

const NavLinks = () => {
  return (
    <div className="sizing-grow display-flex align-center justify-space-between t_direction-reverse t_justify-start">
      <div
        className="nav-burger bg-switch-on"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <div
          id="nav-burger-line-1"
          className="nav-burger-line bg-bright-100 bg-switch-on"
        ></div>
        <div
          id="nav-burger-line-2"
          className="nav-burger-line bg-bright-100 bg-switch-on"
        ></div>
      </div>
      {/* ................. */}
      <Offcanvas />
      {/* .................. */}

      <div className="nav-menu bg-switch-on t_visibility-hidden">
        <ul
          role="list"
          className="display-flex align-center t_display-block w-list-unstyled"
        >
          {navData.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div className="display-flex align-center">
        <Button className="outline m_display-none w-button">
          Get in touch
        </Button>
        <Button> Book a demo</Button>
        <a href="#" className="m_display-none id w-inline-block">
          <div className="p color-bright-100 display-flex w-embed">
            <img src={user} alt="user-icon" />
          </div>
        </a>
      </div>
    </div>
  );
};
export default NavLinks;
