import "./App.css";
import FormPj from "./components/formPj/FormPj";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/formPj/game/Game";

function App() {
  return (
    <Router>
      <div className="text-center p-1 text-light">
        <h1 className="mt-5">Ta Te Ti en React.js</h1>
        <h2>Elige tu símbolo</h2>
      </div>
      <Routes>
        <Route path="/" element={<FormPj />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
