import { useState } from "react";
import { Button } from "@components";

import { navData } from "./NavData";
import NavItem from "./NavItem";
import Offcanvas from "./Offcanvas";
import GitInTouchModal from "./GitInTouchModal";

const NavLinks = () => {
  const [modalShow, setModalShow] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  return (
    <div className="sizing-grow display-flex align-center justify-space-between t_direction-reverse t_justify-start">
      <Button
        className="d-lg-none text-white"
        onClick={() => setShowOffCanvas(true)}
      >
        <i className="fa-solid fa-bars fa-2x"></i>
      </Button>

      <Offcanvas show={showOffCanvas} onHide={() => setShowOffCanvas(false)} />
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
        <Button onClick={() => setModalShow(true)} variant="secondary">
          Get in touch
        </Button>
        <GitInTouchModal modalShow={modalShow} setModalShow={setModalShow} />
      </div>
    </div>
  );
};
export default NavLinks;
