import "./styles.css";

function Input({ props }) {
  const { name, type, placeholder, label } = props;
  return (
    <div className="input-wrapper">
      <label className="inputLable" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

export default Input;
