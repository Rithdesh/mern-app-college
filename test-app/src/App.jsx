import "./App.css";
import { Routes,Route } from "react-router-dom";
import React from "react";
import Login from "./Component/Login";
import Difference from "./Component/Difference";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/difference" element={<Difference />} />
      </Routes>
    </>
  );
}

export default App;
