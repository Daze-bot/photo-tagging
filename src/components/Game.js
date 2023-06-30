import React, { useState } from "react";
import GameHeader from "./GameHeader";
import Level from "./Level";
import levelData from "../data/levelData";

const Game = (props) => {
  const [level, setLevel] = useState(1);
  const [levelInfo, setLevelInfo] = useState(levelData.find(x => x.level === level));

  const handleLevelComplete = () => {
    setLevel(level + 1);
  }

  const handleGameOver = () => {
    setLevel(1);
  }

  return (
    <div className="mainGame">
      <GameHeader 
        level={level}
        target={levelInfo.target}
        gameOver={handleGameOver}
      />
      <Level 
        image={levelInfo.image}
      />
    </div>
  )
}

export default Game;
