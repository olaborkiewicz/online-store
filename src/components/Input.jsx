const Input = ({
  type = 'text',
  placeholder,
  icon,
  onChange,
  value,
}) => {
  return (
    <div className="position-relative">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="form-control"
        value={value}
      />
      <div
        className="position-absolute"
        style={{ top: '5px', right: '15px' }}
      >
        {icon}
      </div>
    </div>
  );
};

export default Input;
