import React, { useEffect, useState, useRef } from "react";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import TryAgain from "./TryAgain";

const Level = (props) => {
  const [cursorX, setCursorX] = useState(null);
  const [cursorY, setCursorY] = useState(null);
  const [mouseOnScreen, setMouseOnScreen] = useState(false);
  const [target, setTarget] = useState({});
  const [failClick, setFailClick] = useState(false);
  const [circleColor, setCircleColor] = useState('black');

  const imgRef = useRef();

  const removeAlert = () => {
    setFailClick(false);
  }

  const handleCorrectGuess = () => {
    setCircleColor('green');
    props.handleLevelComplete();
    removeAlert();
  }

  const handleBadGuess = () => {
    setCircleColor('black');
    setFailClick(true)
  }

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

  const fetchCoords = async () => {
    const targetRef = doc(db, 'targets', props.level.toString());
    const targetSnap = await getDoc(targetRef);
    setTarget(targetSnap.data());
  }

  const handleClick = () => {
    const width = imgRef.current.offsetWidth;
    const height = imgRef.current.offsetHeight;

    const relX = (cursorX + 50) / width;
    const relY = (cursorY + 50) / height;

    const clickLocationX = relX.toFixed(5);
    const clickLocationY = relY.toFixed(5);
    
    if ((Math.abs(target.locationX - clickLocationX) < .018) && 
        (Math.abs(target.locationY - clickLocationY) < .02)) {
      handleCorrectGuess();
    } else {
      handleBadGuess();
    }
  }

  const handleImgLoad = () => {
    window.scrollTo(0,0);
    props.startTimer();
    props.setLevelLoaded(true);
    setCircleColor('black');
  }

  useEffect(() => {
    fetchCoords();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.level]);

  useEffect(() => {
    let intervalID;
    if (props.timerRunning) {
      intervalID = setInterval(() => props.setTimer(props.timer + 1), 10);
    }
    return () => clearInterval(intervalID);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {failClick &&
          <TryAgain
            removeAlert={removeAlert}
          />
        }
        <img 
          src={props.image} 
          alt="Level" 
          draggable="false" 
          ref={imgRef}
          onLoad={handleImgLoad}
        ></img>
      </div>
      {mouseOnScreen &&
        <div 
          id="circleCursor"
          style={{left: cursorX, top: cursorY, borderColor: circleColor}}
        ></div>
      }
    </div>
  )
}

export default Level;
