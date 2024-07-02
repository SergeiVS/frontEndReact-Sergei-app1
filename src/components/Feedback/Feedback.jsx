import "./styles.css";

import { useState } from "react";
import Button from "../Button/Button";

function Feedback() {
  const [likesCount, setLikesCount] = useState(0);
  const onLike = () => {
    setLikesCount((prevValue) => {
      console.log("like");
      return prevValue + 1;
    });
  };

  const [dislikesCount, setdislikesCount] = useState(0);
  const onDislike = () => {
    setdislikesCount((prevValue) => {
      console.log("dislike");
      return prevValue + 1;
    });
  };

  const onReset = () => {
    setdislikesCount(0);
    setLikesCount(0);
  };
  return (
    <div className="feedback-component-wrapper">
      <div className="feedback-fields-wrapper">
        <div className="feedback-field">
          <Button
            name={""}
            type="button"
            buttonClass={"like-button"}
            onClick={onLike}
          />
          <div className="output-field">
            <p>{likesCount}</p>
          </div>
        </div>
        <div className="feedback-field">
          <Button
            name={""}
            type="reset"
            buttonClass={"dislike-button"}
            onClick={onDislike}
          />
          <div className="output-field">
            <p>{dislikesCount}</p>
          </div>
        </div>
      </div>
      <Button
        name={"Reset Results"}
        type="button"
        buttonClass={"delete-button"}
        onClick={onReset}
      />
    </div>
  );
}

export default Feedback;
