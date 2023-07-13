import React, { useState } from "react";
import GameHeader from "./GameHeader";
import Level from "./Level";
import levelData from "../data/levelData";

const Game = (props) => {
  const [level, setLevel] = useState(1);
  const [levelInfo, setLevelInfo] = useState(levelData.find(x => x.level === level));
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const startTimer = () => {
    setTimerRunning(true);
  }

  const stopTimer = () => {
    setTimerRunning(false);
  }

  const resetTimer = () => {
    setTimer(0);
  }

  const handleLevelComplete = () => {
    setLevel(level + 1);
  }

  const handleGameOver = () => {
    setLevel(1);
    stopTimer();
    props.setFinalTime(timer);
    resetTimer();
  }

  return (
    <div className="mainGame">
      <GameHeader 
        level={level}
        target={levelInfo.target}
        gameOver={handleGameOver}
        timer={timer}
      />
      <Level 
        image={levelInfo.image}
        startTimer={startTimer}
        setTimer={setTimer}
        timer={timer}
        timerRunning={timerRunning}
      />
    </div>
  )
}

export default Game;
