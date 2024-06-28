import "./styles.css";

// function SimpsonsCard({ firstName, lastName, occupation, hobbies, avatar }) {
function SimpsonsCard({ user }) {
  const { avatar, firstName, lastName, hobbies, occupation } = user;

  const getHobbiesListening = () => {
    const liElements = hobbies.map((hobby) => (
      <li className="user-data">{hobby}</li>
    ));
    return <ul className="listening">{liElements}</ul>;
  };

  return (
    <div className="card">
      <div className="avatar-container">
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
      <div className="cards-block">
        <p className="title">Name:</p>
        <p className="user-data">
          {firstName} {lastName}
        </p>
      </div>
      <div className="cards-block">
        <p className="title">Occupation:</p>
        <p className="user-data">{occupation}</p>
      </div>
      <div className="cards-block">
        <p className="title">Hobbies:</p>
        {getHobbiesListening()}
      </div>
    </div>
  );
}

export default SimpsonsCard;
