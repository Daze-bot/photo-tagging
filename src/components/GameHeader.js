import React, { useState } from "react";
import { Link } from "react-router-dom";
import readTime from "../utils/readTime";

const GameHeader = (props) => {
  const [hovered, setHovered] = useState(false);

  const showTooltip = () => {
    setHovered(true);
  }

  const hideTooltip = () => {
    setHovered(false);
  }

  return (
    <div className="gameHeader">
      { props.levelLoaded
        ? <div className="currentLevel">
            Level {props.level}
            <div
              className="currentTarget"
              onMouseOver={showTooltip}
              onMouseOut={hideTooltip}
            >
              <img src={props.target} alt="Current Target"></img>
              { hovered &&
                <div className="targetTooltip">Find Me!</div> }
            </div>
          </div>
        : <div className="currentLevel">
            Level {props.level} Loading...
          </div>
      }
      <div className="gameTimer">
        Time: {readTime(props.timer)}
      </div>
      <Link to={'/'}>
        <div className="returnMain">
          Main Menu
        </div>
      </Link>
    </div>
  )
}

export default GameHeader;
