import React, { useState } from "react";
import { Link } from "react-router-dom";

const GameRecap = (props) => {
  const [timeSubmitted, setTimeSubmitted] = useState(false);

  const handleNameChange = (event) => {
    props.setPlayerName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitScore();
    setTimeSubmitted(true);
  }

  return (
    <div className="gameRecap">
      <h2>You Found Everything!</h2>
      <p>Final Time: {props.finalTime}</p>
      {timeSubmitted === false &&
        <form 
          className="playerNameEntry"
          onSubmit={handleSubmit}
        >
          <label htmlFor="playerName">
            Enter your name
          </label>
          <input
            type="text"
            id="playerName"
            name="playerName"
            maxLength={20}
            value={props.playerName}
            onChange={handleNameChange}
            autoComplete="off"
            autoFocus
          />
          <button>Submit</button>
        </form>
      }
      {timeSubmitted &&
        <div className="gameOverButtons">
          <button onClick={props.resetGame}>Play Again</button>
          <Link to={'/'}>
            <button>Main Menu</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default GameRecap;
