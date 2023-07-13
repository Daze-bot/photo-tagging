import React, { useEffect, useState } from "react";

const Level = (props) => {
  const [cursorX, setCursorX] = useState(null);
  const [cursorY, setCursorY] = useState(null);
  const [mouseOnScreen, setMouseOnScreen] = useState(false);

  const useCircleMouse = (e) => {
    setCursorX(e.pageX - 50);
    setCursorY(e.pageY - 145);
  }

  const handleMouseEnter = () => {
    setMouseOnScreen(true);
  }

  const handleMouseLeave = () => {
    setMouseOnScreen(false);
  }

  useEffect(() => {
    props.startTimer();
  }, []);

  useEffect(() => {
    let intervalID;
    if (props.timerRunning) {
      intervalID = setInterval(() => props.setTimer(props.timer + 1), 10);
    }
    return () => clearInterval(intervalID);
  }, [props.timerRunning, props.timer]);

  return (
    <div 
      className="level"
      onMouseMove={useCircleMouse}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="levelImgContainer">
        <img src={props.image} alt="Level" draggable="false"></img>
      </div>
      {mouseOnScreen &&
        <div 
          id="circleCursor"
          style={{left: cursorX, top: cursorY}}
        ></div>
      }
    </div>
  )
}

export default Level;
