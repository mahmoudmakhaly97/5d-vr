import { navData } from "./NavData";
import OffcanvasDropdown from "./OffcanvasDropdown";
import logo from "../../../assets/images/navbar/logo.svg";

import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasMaker({ show, onHide }) {
  return (
    <>
      <Offcanvas show={show} onHide={onHide}>
        <Offcanvas.Header>
          <div className="d-flex justify-content-between w-100 align-items-center">
            <div className="d-flex justify-content-start">
              <img src={logo} alt={logo} className=" img-fluid " />
            </div>
            <i className="fa fa-xmark text-white fa-2x" onClick={onHide}></i>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body d-flex flex-column align-items-center">
          {navData.map((item) => (
            <OffcanvasDropdown item={item} key={item.id} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasMaker;
