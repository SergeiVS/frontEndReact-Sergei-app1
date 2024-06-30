// Новый коммпонент кнопка создан чтобы сохранить предыдущие
// решения и связи работающими, но оставить код читаемым.
import "./styles.css";

function ButtonHW03({ props }) {
  const { name, type } = props;
  return (
    <button className="buttonHW03" type={type}>
      {name}
    </button>
  );
}

export default ButtonHW03;
