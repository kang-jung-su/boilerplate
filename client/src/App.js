import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LogingPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  const AuthLandinPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LogingPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);




  return (
    <Router>
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
