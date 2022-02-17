import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./FormPj.css";

const FormPj = ({ name1, name2, setName1, setName2, setPlayers, players }) => {
  const [activePj, setActivePj] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    setActivePj(true);
    setPlayers([name1, name2]);
    setName1("");
    setName2("");
  };

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

          {activePj ? (
            <div className="play-container">
              <Link to="game">
                <button className="btn-play  text-primary">Ir a Jugar</button>
              </Link>
            </div>
          ) : (
            <div className="inactive-container">
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
              <button type="submit" className="btn-submit text-primary">
                Aceptar
              </button>
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default FormPj;
