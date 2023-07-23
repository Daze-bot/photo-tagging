import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import readTime from "../utils/readTime";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [times, setTimes] = useState([]);

  const getTimes = async () => {
    const tempArray = [];

    const q = query(collection(db, 'scores'), orderBy('time'), limit(20));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tempArray.push(doc.data());
    })

    setTimes(tempArray);
  };

  const scoreList = times.map((time, index) => (
    <li key={index}>
      <div className="timeListItem">
        <p className="timeRank">{index + 1}</p>
        <p className="timeName">{time.name}</p>
        <p className="timeTime">{readTime(time.time)}</p>
      </div>
    </li>
  ));

  useEffect(() => {
    getTimes();
  }, []);

  return (
    <div className="leaderboard">
      <div className="leaderboardHeader">
        <h2>Leaderboard</h2>
        <Link to={'/'}>
          <div className="returnMain">
            Main Menu
          </div>
        </Link>
      </div>
      <div className="leaderboardKey">
        <p className="timeRank">Rank</p>
        <p className="timeName">Name</p>
        <p className="timeTime">Time</p>
      </div>
      <ol>{scoreList}</ol>
    </div>
  )
}

export default Leaderboard;
