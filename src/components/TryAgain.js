import React, { useEffect } from "react";

const TryAgain = (props) => {
  useEffect(() => {
    const timeID = setTimeout(() => {
      props.removeAlert();
    }, 800)

    return () => {
      clearTimeout(timeID)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="badGuess">
      <p>Oops,</p>
      <p>Try Again!</p>
    </div>
  );
}

export default TryAgain;
