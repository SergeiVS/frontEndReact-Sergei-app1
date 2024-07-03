import "./styles.css";
import avatar from "../../assets/Homer_Simpson_2006.png";
import Button from "../../components/Button/Button";
import { userData } from "./data";
// const imageUrl =
//   "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp";

const showButton = false;

function Consultation01() {
  return (
    <div className="consultation01-commponents">
      {showButton && <Button />}
      <img src={avatar} className="avatar-img" alt="avatar" />
      <div>{userData.userName}</div>
      <div className="avatar-container">
        <img id="example-avatar" src={userData.avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Consultation01;
