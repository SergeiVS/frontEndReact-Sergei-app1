import { testUser } from "../../components/Card/testUser";
import "./styles.css";
import avatar from "../../assets/Homer_Simpson_2006.png";

const name = (
  <p className="user-data">
    {testUser.firstName} {testUser.lastName}
  </p>
);

const getHobbiesListening = () => {
  const hobbies = testUser.hobbies;
  const liElements = hobbies.map((hobby) => (
    <li className="user-data">{hobby}</li>
  ));
  return <ul className="listening">{liElements}</ul>;
};

function Card() {
  return (
    <div className="card">
      <div className="avatar-container">
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
      <div className="cards-block">
        <p className="title">Name:</p>
        {name}
      </div>
      <div className="cards-block">
        <p className="title">Occupation:</p>
        <p className="user-data">{testUser.occupation}</p>
      </div>
      <div className="cards-block">
        <p className="title">Hobbies:</p>
        {getHobbiesListening()}
      </div>
    </div>
  );
}
export default Card;
