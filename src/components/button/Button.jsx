import "./styles.css";

function Button({ name, type = "button", onClick, imgSrc }) {
  return (
    <button className={`button-component `} type={type} onClick={onClick}>
      {!name && <img className="button-image" src={imgSrc} alt="icon"/>}
      {!imgSrc && name}
    </button>
  );
}

export default Button;
