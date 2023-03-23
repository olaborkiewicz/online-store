const Button = ({ outline = false, size = "md", onClick, children }) => {
  const classes = `${outline ? "button-outline" : ""} ${size ? `button-${size}` : ""}`;

  return (
    <button className={`button ${classes}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;