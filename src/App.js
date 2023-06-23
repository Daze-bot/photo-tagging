import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import './styles/app.css';
import Home from "./components/Home";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import Instructions from './components/Instructions';

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAfwnjoAcr3Mt64TtGCd2fv30GriRzGar8",
    authDomain: "photo-tagging-3b1cb.firebaseapp.com",
    projectId: "photo-tagging-3b1cb",
    storageBucket: "photo-tagging-3b1cb.appspot.com",
    messagingSenderId: "532262825696",
    appId: "1:532262825696:web:9d198a1131eb8a9dce6a85"
  };

  initializeApp(firebaseConfig);

  const [level, setLevel] = useState(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/" element={<Game />}/>
        <Route path="/leaderboard/" element={<Leaderboard />}/>
        <Route path="/instructions/" element={<Instructions />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
