import React, { useState } from "react";

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

  return (
    <div 
      className="level"
      onMouseMove={useCircleMouse}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="levelImgContainer">
        <img src={props.image} alt="Level"></img>
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
