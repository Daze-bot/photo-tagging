import React, { useEffect, useState } from "react";
import GameHeader from "./GameHeader";
import Level from "./Level";
import levelData from "../data/levelData";
import readTime from "../utils/readTime";

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
    if (level < 3) {
      stopTimer();
      setLevel(level + 1);
    } else {
      stopTimer();
      alert(`you win! final time was ${readTime(timer)}`);
    }
  }

  const handleGameOver = () => {
    setLevel(1);
    stopTimer();
    props.setFinalTime(timer);
    resetTimer();
  }

  useEffect(() => {
    setLevelInfo(levelData.find(x => x.level === level));
  },[level]);

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
        level={level}
        handleLevelComplete={handleLevelComplete}
      />
    </div>
  )
}

export default Game;
