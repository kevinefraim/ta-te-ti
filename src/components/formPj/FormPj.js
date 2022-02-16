import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Game from "../game/Game";
import "./FormPj.css";

const FormPj = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [activePj, setActivePj] = useState(false);
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem("players")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const submitForm = (e) => {
    e.preventDefault();
    setPlayers([name1, name2]);
    setActivePj(true);
    setName1("");
    setName2("");
  };
  console.log(players);
  return (
    <main>
      <div className="form-container">
        <h3 className="text-center  pt-2">Inserte jugadores</h3>
        <form onSubmit={submitForm} className="form-players">
          <div className="btn-container">
            <p type="button" className="btn-symbol text-center text-primary">
              X
            </p>
            <p type="button" className="btn-symbol text-center text-success">
              O
            </p>
          </div>
          <div className="name-inputs">
            <div className="form-item">
              <label htmlFor="player1">Tu:</label>
              <input
                type="text"
                placeholder="Escribe tu nombre"
                onChange={(e) => setName1(e.target.value)}
                value={name1}
              />
            </div>
            <div className="form-item">
              <label htmlFor="player2">Rival:</label>
              <input
                type="text"
                placeholder="Escribe tu nombre"
                onChange={(e) => setName2(e.target.value)}
                value={name2}
              />
            </div>
          </div>

          <div className="btn-container">
            {activePj ? (
              <Link to="game">
                <button className="btn-play text-primary">Ir a Jugar</button>
              </Link>
            ) : (
              <button type="submit" className="btn-play text-primary">
                Aceptar
              </button>
            )}

            <div className="d-none">
              <Game players={players} />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FormPj;
