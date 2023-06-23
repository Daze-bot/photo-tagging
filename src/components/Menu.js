import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  return (
    <ul className="menuLinks">
      <Link to={'/game/'}>
        <li>New Game</li>
      </Link>
      <Link to={'/leaderboard/'}>
        <li>Leaderboard</li>
      </Link>
      <Link to={'/instructions/'}>
        <li>Instructions</li>
      </Link>
    </ul>
  )
}

export default Menu;
