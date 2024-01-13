import { Game } from "./pages/Game";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Welcome } from "./pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/game" element={<Game />} />
        <Route path="/*" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
