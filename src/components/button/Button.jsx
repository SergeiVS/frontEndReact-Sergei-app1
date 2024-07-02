import "./styles.css";

// function Button() {
//   const buttonName = "Get";
// const getButtonClass = () => {
//   return buttonName === "Delete"
//     ? "button-component delete-button"
//     : "button-component main-button";
// };

// const getButtonClass = () => {
//   if (buttonName === "Delete") {
//     return "button-component delete-button";
//   } else {
//     return "button-component main-button";
//   }
// };
//   const buttonClass = buttonName === "Delete" ? "delete-button" : "main-button";

//   return (
//     <button className={`button-component ${buttonClass}`}>{buttonName}</button>
//   );
// }

function Button({ name, type = "button", onClick }) {
  
  const buttonClass = name === "Delete" ? "delete-button" : "main-button";

  return (
    <button className={`button-component ${buttonClass}`} type={type}>
      {name}
    </button>
  );
}

export default Button;
