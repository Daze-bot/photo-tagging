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
        <Route path="/" element={<Home />} />
        <Route 
          path="/game/" 
          element={<Game />}
        />
        <Route path="/leaderboard/" element={<Leaderboard />}/>
        <Route path="/instructions/" element={<Instructions />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
