import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Nav from "./component/Nav";
import "./index.css";

function App() {
  return (
    <div>
      <Nav/>
      <div>
      <Routes>
        <Route path="/" element={<Hero/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
