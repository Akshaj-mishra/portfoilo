import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Nav from "./component/Nav";
import "./index.css";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Hero/>} />
      </Routes>
    </div>
  );
}

export default App;
