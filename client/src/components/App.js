import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../hoc/auth";


import LandingPage from "./views/LandingPage/LandingPage";
import LogingPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";

function App() {
  const AuthLandinPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LogingPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);




  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<AuthLandinPage />} />
          <Route path="/login" element={<AuthLoginPage />} />
          <Route path="/register" element={<AuthRegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
