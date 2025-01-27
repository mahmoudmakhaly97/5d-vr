// eslint-disable-next-line react/prop-types
const Button = ({ children, className = "" }) => {
  return (
    <a
      href="#"
      className={`button margin-right margin-x-small m_margin-right m_margin-xx-small w-button ${className}`}
    >
      {children}
    </a>
  );
};
export default Button;
