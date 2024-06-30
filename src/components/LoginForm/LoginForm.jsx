// импорт необходимых компонентов и стилей
import "./styles.css";
import ButtonHW03 from "../ButtonHW03/ButtonHW03";
import Input from "../Input/Input";

//свойства для выводимой кнопки
const buttonProps = { name: "Login", type: "submit" };

// свойства для двух разных полей ввода(экземпляров?)
const inputEmailProps = {
  name: "email",
  type: "email",
  placeholder: "Enter your email",
  label: "Email",
};

const inputPasswordProps = {
  name: "password",
  type: "password",
  placeholder: "Enter your password",
  label: "Password",
};
//функция возвращающая форму входа
function LoginForm() {
  return (
    <form className="login-form">
      <p className="form-title">Login form</p>
      <div className="inputs-fields-wrapper">
        {/* вызов 2-х компонентов полей ввода с разными переданными им свойствами */}
        <Input props={inputEmailProps} />
        <Input props={inputPasswordProps} />
      </div>
      {/* вызов комнонента кнопка */}
      <ButtonHW03 props={buttonProps} />
    </form>
  );
}
//экспорт формы
export default LoginForm;
