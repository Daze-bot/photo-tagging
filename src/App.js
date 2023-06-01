import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from 'firebase/app';

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

  return (
    <BrowserRouter>

    </BrowserRouter>
  )
}
export default App;
