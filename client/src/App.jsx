import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login"; // Add this import
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
