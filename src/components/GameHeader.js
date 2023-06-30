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

  return (
    <div className="gameHeader">
      <div className="currentLevel">
        Level {props.level}
      </div>
      <div 
        className="currentTarget"
        onMouseOver={showTooltip}
        onMouseOut={hideTooltip}
      >
        <img src={props.target} alt="Current Target"></img>
        { hovered && 
          <div className="targetTooltip">Find Me!</div> }
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
