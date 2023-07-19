import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/app.css';
import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import Instructions from './components/Instructions';

const App = () => {
  const [finalTime, setFinalTime] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/game/" 
          element={<Game 
            setFinalTime={setFinalTime}
            finalTime={finalTime}
          />}
        />
        <Route path="/leaderboard/" element={<Leaderboard />}/>
        <Route path="/instructions/" element={<Instructions />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
