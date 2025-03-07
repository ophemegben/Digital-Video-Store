import "../css/Registration.css";

export const InputField = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="form-input"
    />
  );
};

export const Checkbox = ({ label, id, name }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        name={name}
        id={id}
        className="checkbox-input"
      />
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
    </div>
  );
};

export const Button = ({ text, className, type = "button" }) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};
