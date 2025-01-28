import { navData } from "./NavData";
import OffcanvasDropdown from "./OffcanvasDropdown";
import logo from "../../../assets/images/navbar/logo.svg";

const Offcanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-top"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header justify-content-between">
        <img src={logo} alt={logo} className=" img-fluid " />
        <i
          className="fa fa-xmark text-white fa-2x"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></i>{" "}
      </div>
      <div className="offcanvas-body d-flex flex-column align-items-center">
        {navData.map((item) => (
          <OffcanvasDropdown item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default Offcanvas;
