import "./App.css";
import FormPj from "./components/formPj/FormPj";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/game/Game";

function App() {
  return (
    <Router>
      <h1 className="text-center p-4 text-light">Ta Te Ti en React.js</h1>
      <Routes>
        <Route path="/" element={<FormPj />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
