import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LogingPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/LogingPage" element={<LogingPage />}></Route>
          <Route path="/RegisterPage" element={<RegisterPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
