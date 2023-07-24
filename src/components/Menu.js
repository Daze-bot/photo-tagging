import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  return (
    <ul className="menuLinks">
      <Link to={'/photo-tagging/game/'}>
        <li>New Game</li>
      </Link>
      <Link to={'/photo-tagging/leaderboard/'}>
        <li>Leaderboard</li>
      </Link>
      <Link to={'/photo-tagging/instructions/'}>
        <li>Instructions</li>
      </Link>
    </ul>
  )
}

export default Menu;
