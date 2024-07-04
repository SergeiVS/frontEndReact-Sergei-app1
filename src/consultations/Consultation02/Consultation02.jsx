import "./styles.css";
import { useState } from "react";

function Consultation02() {
  //   const uState = useState("Hello");
  //   console.log(uState);
  //   const [state, setState] = uState;
  //   console.log(state);
  //   console.log(setState);

  const getMultipliteValues = (a, b, c, multiplicator) => {
    const value1 = a * multiplicator;
    const value2 = b * multiplicator;
    const value3 = c * multiplicator;
    return [value1, value2, value3];
  };
  const values = getMultipliteValues(1, 2, 3, 5);
  console.log(values);

  const [val1, val2, val3] = values;

  console.log(val1, val2, val3);

  const sayHi = (event, userName) => {
    event.preventDefault();
    console.log(event);
    console.log(`Hello ${userName}`);
  };

  const user1 = {
    firstName: "John",
    lastName: "Doe",
    age: "40",
    job: "Frontend developer",
  };

  //   const firstName = user1["firstName"];
  //   console.log(firstName);
  //   const lastName = user1.lastName;
  //   console.log(lastName);

  //   const { firstName, lastName, age, job } = user1;
  const { firstName, lastName, ...rest } = user1;
  console.log(lastName);
  console.log(firstName);
  console.log(rest);

  const animals = ["Tiger", "Lion", "Cat", "Dog", "Rat"];

  const tiger = animals.find((value) => {
    return value === "Dog";
  });
  //   const [tiger, lion, cat, dog, rat] = animals;

  console.log(tiger);

  return (
    <div className="consultation-wrapper">
      {/* <form onSubmit={sayHi}>
        <button type="submit">click me</button>
      </form> */}
      <button
        type="submit"
        onClick={(event) => {
          sayHi(event, "John");
        }}
      >
        click me
      </button>
      <a
        href="https://google.com"
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        Link to Google
      </a>
    </div>
  );
}
export default Consultation02;
