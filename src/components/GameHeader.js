import React from "react";
import { Link } from "react-router-dom";

const GameHeader = (props) => {

  return (
    <div className="gameHeader">
      <div className="currentLevel">
        Level {props.level}
      </div>
      <div className="currentTarget">
        <img src={props.target} alt="Current Target"></img>
      </div>
      <Link to={'/'}>
        <button onClick={props.gameOver}>Main Menu</button>
      </Link>
    </div>
  )
}

export default GameHeader;
