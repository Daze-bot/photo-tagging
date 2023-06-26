import React from "react";
import GameHeader from "./GameHeader";
import Level1 from "./Level1";

const Game = (props) => {

  return (
    <div className="mainGame">
      <GameHeader 
        level={props.level}
        target={'tbd'}
        gameOver={props.gameOver}
      />
      {props.level === 1 &&
        <Level1 />
      }
    </div>
  )
}

export default Game;
