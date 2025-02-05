import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap"; // Import from reactstrap
import logo from "@images/navbar/logo.svg";
import { navData } from "./NavData";
import OffcanvasDropdown from "./OffcanvasDropdown";

function OffcanvasMaker({ show, onHide }) {
  return (
    <>
      <Offcanvas isOpen={show} toggle={onHide} className="offcanvas-custom ">
        <OffcanvasHeader toggle={onHide}>
          <div className="d-flex justify-content-between  align-items-center ">
            <div className="d-flex justify-content-start ">
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>
            <i className="fa fa-xmark text-white fa-2x" onClick={onHide}></i>
          </div>
        </OffcanvasHeader>
        <OffcanvasBody className="offcanvas-body d-flex flex-column align-items-center">
          {navData.map((item) => (
            <OffcanvasDropdown item={item} key={item.id} />
          ))}
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}

export default OffcanvasMaker;
