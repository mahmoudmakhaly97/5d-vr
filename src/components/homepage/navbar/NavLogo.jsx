import logo from "../../../assets/images/navbar/logo.png";
const NavLogo = () => {
  return (
    <a
      href="#"
      className="Logo display-flex align-center margin-right margin-large w-inline-block"
    >
      <img src={logo} alt={logo} className=" img-fluid " />
    </a>
  );
};
export default NavLogo;
