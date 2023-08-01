import Main from "./pages/Main"
import Character from "./pages/Character";
import Item from "./components/Item";
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App flex justify-center ">

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;