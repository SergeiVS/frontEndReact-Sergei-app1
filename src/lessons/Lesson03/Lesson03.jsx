import "./styles.css";
import SimpsonsCard from "../../components/SimpsonsCard/SimpsonsCard";
import { testUser } from "../../components/SimpsonsCard/testUsers";
import Button from "../../components/Button/Button";

const marge = {
  firstName: "Marge",
  lastName: "Simpson",
  occupation: "No job",
  hobbies: [
    "Spending time with Homer and the rest of their family",
    "Disciplining Bart",
    "Protecting her loved ones",
  ],
  avatar:
    "https://media.elobservador.com.uy/p/5e6d2228baa0e437bf6b47642f2a25b2/adjuntos/362/imagenes/100/509/0100509802/1000x0/smart/margepng.png",
};

const bart = {
  firstName: "Bart",
  lastName: "Simpson",
  occupation: "No job",
  hobbies: ["Causing mischief", "Skateboarding", "Prank calling Moe's Tavern"],
  avatar: "https://pngimg.com/uploads/simpsons/simpsons_PNG71.png",
};

function Lesson03() {
  return (
    // <div className="lesson03-wrapper">
    //   <SimpsonsCard */}
    // {/* //     firstName={testUser.firstName}
    // //     lastName={testUser.lastName}
    // //     avatar={testUser.avatar}
    // //     occupation={testUser.occupation}
    // //     hobbies={getHobbiesListening(testUser)}
    // //   />
    // //   <SimpsonsCard */}
    //     firstName={marge.firstName}
    //     lastName={marge.lastName}
    //     avatar={marge.avatar}
    //     occupation={marge.occupation}
    //     hobbies={getHobbiesListening(marge)}
    //   />
    //   <SimpsonsCard */}
    //     firstName={bart.firstName}
    //     lastName={bart.lastName}
    //     avatar={bart.avatar}
    //     occupation={bart.occupation}
    //     hobbies={getHobbiesListening(bart)}
    //   /> */}
    <div className="lesson03-wrapper">
      <SimpsonsCard user={testUser} />
      <SimpsonsCard user={marge} />
      <SimpsonsCard user={bart} />
      <Button />
      <Button buttonName="Get" />
      <Button buttonName="Delete" />
    </div>
  );
}

export default Lesson03;
