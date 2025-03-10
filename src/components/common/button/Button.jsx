const Button = ({
  children,
  onClick,
  className = "",
  variant = "secondary" | "primary " | "outline" | "underline",
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-pill _btn  ${className} ${variant}  `}
    >
      {children}
    </button>
  );
};
export default Button;
