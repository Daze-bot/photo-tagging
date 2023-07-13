import React, { useEffect, useState, useRef } from "react";

const Level = (props) => {
  const [cursorX, setCursorX] = useState(null);
  const [cursorY, setCursorY] = useState(null);
  const [mouseOnScreen, setMouseOnScreen] = useState(false);

  const imgRef = useRef();

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


  //Successfully found click location regardless of size
  const handleClick = () => {
    const width = imgRef.current.offsetWidth;
    const height = imgRef.current.offsetHeight;

    const relX = (cursorX + 50) / width;
    const relY = (cursorY + 50) / height;

    console.log(relX.toFixed(5), relY.toFixed(5));
  }

  const handleImageClick = async () => {

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
      onClick={handleClick}
    >
      <div className="levelImgContainer">
        <img 
          src={props.image} 
          alt="Level" 
          draggable="false" 
          ref={imgRef}
        ></img>
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
