import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login"; // Add this import
import PasswordChanger from "./Components/PasswordChanger"; // Add this import if you have a PasswordChanger component
import Main from "./Components/MainPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />
        <Route path="/PasswordChanger" element={<PasswordChanger />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
