import React, { useEffect, useState } from "react";
import GameHeader from "./GameHeader";
import Level from "./Level";
import levelData from "../data/levelData";
import readTime from "../utils/readTime";
import { db } from "./firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import GameRecap from "./GameRecap";

const Game = () => {
  const [level, setLevel] = useState(1);
  const [levelInfo, setLevelInfo] = useState(levelData.find(x => x.level === level));
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [levelLoaded, setLevelLoaded] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [playerName, setPlayerName] = useState('');

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
    setLevel(1);
  }

  const submitScore = () => {
    if (playerName === '') {
      addScore('Unknown');
    } else {
      addScore(playerName);
    }
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

  const resetGame = () => {
    resetTimer();
    setGameOver(false);
  }

  const addScore = async (name) => {
    try {
      await addDoc(collection(db, 'scores'), {
        name: name,
        time: timer
      });
    } catch (e) {
      console.error("Error adding score:", e);
    }
  }

  useEffect(() => {
    setLevelInfo(levelData.find(x => x.level === level));
  },[level]);

  if (gameOver) {
    return (
      <div className="mainGame">
        <GameRecap 
          finalTime={readTime(timer)}
          playerName={playerName}
          setPlayerName={setPlayerName}
          submitScore={submitScore}
          resetGame={resetGame}
        />
      </div>
    )
  } else {
    return (
      <div className="mainGame">
        <GameHeader 
          level={level}
          target={levelInfo.target}
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
          gameOver={gameOver}
        />
      </div>
    )
  }
}

export default Game;
