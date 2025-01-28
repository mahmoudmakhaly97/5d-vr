// eslint-disable-next-line react/prop-types
const Button = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button margin-right margin-x-small m_margin-right m_margin-xx-small w-button ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
