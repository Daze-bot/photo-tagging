import React from "react";
import { Link } from "react-router-dom";

const GameHeader = (props) => {

  return (
    <div className="gameHeader">
      <div className="currentLevel">
        Level {props.level}
      </div>
      <div className="currentTarget">
        Target:
        <img src={props.target} alt="Current Target"></img>
      </div>
      <Link to={'/'}>
        <div className="returnMain" onClick={props.gameOver}>
          Main Menu
        </div>
      </Link>
    </div>
  )
}

export default GameHeader;
