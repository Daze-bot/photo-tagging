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
  const [levelLoaded, setLevelLoaded] = useState(false);
  const [gameOver, setGameOver] = useState(false);  

  const startTimer = () => {
    setTimerRunning(true);
  }

  const stopTimer = () => {
    setTimerRunning(false);
  }

  const resetTimer = () => {
    setTimer(0);
  }

  const handleGameComplete = () => {
    stopTimer();
    setGameOver(true);
    props.setFinalTime(timer);
    alert(`you win! final time was ${readTime(timer)}`);
  }

  const handleLevelComplete = () => {
    if (level < 4) {
      setLevelLoaded(false);
      stopTimer();
      setLevel(level + 1);
    } else {
      handleGameComplete();
    }
  }

  const handleMenuClick = () => {
    setLevel(1);
    stopTimer();
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
        menuClick={handleMenuClick}
        timer={timer}
        levelLoaded={levelLoaded}
      />
      <Level 
        image={levelInfo.image}
        startTimer={startTimer}
        setTimer={setTimer}
        timer={timer}
        timerRunning={timerRunning}
        level={level}
        handleLevelComplete={handleLevelComplete}
        setLevelLoaded={setLevelLoaded}
      />
    </div>
  )
}

export default Game;
