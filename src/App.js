import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/app.css';
import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import Instructions from './components/Instructions';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photo-tagging/" element={<Home />} />
        <Route 
          path="/photo-tagging/game/" 
          element={<Game />}
        />
        <Route 
          path="/photo-tagging/leaderboard/" 
          element={<Leaderboard />}
        />
        <Route 
          path="/photo-tagging/instructions/" 
          element={<Instructions />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
