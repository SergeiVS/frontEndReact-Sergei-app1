import "./styles.css";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { v4 } from "uuid";

function Lesson05() {
  const [products, setProducts] = useState([]);

  const addProducts = (product) => {
    setProducts((prevValue) => {
      return [...prevValue, product];
    });
  };

  const buttonNames = [
    "Burger",
    "Freits",
    "Cola",
    "Salat",
    "Ketchup",
    "Icecream",
  ];

  const orderList = products.map((product) => (
    <li key={v4()} className="product">
      {product}
    </li>
  ));

  return (
    <div className="lesson-wrappers">
      <h1>Menu</h1>
      <div className="button-container">
        <div className="button-control">
          <Button
            name={buttonNames[0]}
            onClick={() => addProducts(buttonNames[0])}
          />
        </div>
        <div className="button-control">
          <Button
            name={buttonNames[1]}
            onClick={() => addProducts(buttonNames[1])}
          />
        </div>
        <div className="button-control">
          <Button
            name={buttonNames[2]}
            onClick={() => addProducts(buttonNames[2])}
          />
        </div>
        <div className="button-control">
          <Button
            name={buttonNames[3]}
            onClick={() => addProducts(buttonNames[3])}
          />
        </div>
        <div className="button-control">
          <Button
            name={buttonNames[4]}
            onClick={() => addProducts(buttonNames[4])}
          />
        </div>
        <div className="button-control">
          <Button
            name={buttonNames[5]}
            onClick={() => addProducts(buttonNames[5])}
          />
        </div>
      </div>
      <div className="order-list-container">
        <h2>Order list</h2>
        <ul>{orderList}</ul>
      </div>
    </div>
  );
}

export default Lesson05;
