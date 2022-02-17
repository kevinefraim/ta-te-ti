import "./App.css";
import FormPj from "./components/formPj/FormPj";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/game/Game";
import { useEffect, useState } from "react";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem("players")) ?? []
  );
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  return (
    <Router>
      <h1 className="text-center p-4 text-light">Ta Te Ti en React.js</h1>
      <Routes>
        <Route
          path="/"
          element={
            <FormPj
              name1={name1}
              name2={name2}
              setName1={setName1}
              setName2={setName2}
              players={players}
              setPlayers={setPlayers}
            />
          }
        ></Route>
        <Route
          path="/game"
          element={
            <Game
              name1={name1}
              name2={name2}
              setName1={setName1}
              setName2={setName2}
              players={players}
              setPlayers={setPlayers}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
