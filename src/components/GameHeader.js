import React, { useState } from "react";
import { Link } from "react-router-dom";

const GameHeader = (props) => {
  const [hovered, setHovered] = useState(false);

  const showTooltip = () => {
    setHovered(true);
  }

  const hideTooltip = () => {
    setHovered(false);
  }

  const hours = Math.floor(props.timer / 360000);
  const minutes = Math.floor((props.timer % 360000) / 6000);
  const seconds = Math.floor((props.timer % 6000) / 100);

  return (
    <div className="gameHeader">
      <div className="currentLevel">
        Level {props.level}
        <div className="gameTimer">
          Time: {hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="targetContainer">
        <div
          className="currentTarget"
          onMouseOver={showTooltip}
          onMouseOut={hideTooltip}
        >
          <img src={props.target} alt="Current Target"></img>
          { hovered &&
            <div className="targetTooltip">Find Me!</div> }
        </div>
      </div>
      <Link to={'/'}>
        <div className="returnMain" onClick={props.gameOver}>
          Menu
        </div>
      </Link>
    </div>
  )
}

export default GameHeader;
