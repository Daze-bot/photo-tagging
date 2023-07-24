import React from "react";
import { Link } from "react-router-dom";
import Target from '../imgs/instructions/targetWindow.jpg';

const Instructions = () => {

  return (
    <div className="instructions">
      <div className="instructionsHeader">
        <h2>Instructions</h2>
        <Link to={'/'}>
          <div className="returnMain">
            Main Menu
          </div>
        </Link>
      </div>
      <div className="instructionsMain">
        <div className="rules">
          <div className="rulesSection">
            <h3>The Game</h3>
            <p>Your goal is to find the hidden characters as quickly as you can!  There are four unique worlds, each with one sneaky character that must be found to advance to the next location.</p>
          </div>
          <div className="rulesSection">
            <h3>Target Window</h3>
            <img src={Target} alt="Target Window"></img>
            <p>The Target window displays the current level, as well as the character that you are searching for in that world.</p>
          </div>
          <div className="rulesSection">
            <h3>Game Timer</h3>
            <p>While you complete your search, a timer will keep track of how long your current adventure has been under way.  Once all four characters have been found, your adventure will be recorded in the history books!</p>
          </div>
          <div className="rulesSection">
            <h3>Leaderboard</h3>
            <p>From the main menu, you can access the global leaderboard, which will show you the twenty fastest adventures that have been completed by players like you!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions;
