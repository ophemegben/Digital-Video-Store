import "../css/Registration.css";

export const InputField = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="form-input"
    />
  );
};

export const Checkbox = ({ checked, onChange, label, id, name }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        name={name}
        onChange={onChange}
        id={id}
        className="checkbox-input"
      />
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
    </div>
  );
};

export const Button = ({ text, onClick, className, type = "button"}) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};