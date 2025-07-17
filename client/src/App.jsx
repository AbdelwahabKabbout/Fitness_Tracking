import { Routes, Route } from "react-router-dom";
import Register from "./Components/Authentication/Register";
import Login from "./Components/Authentication/Login";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
