import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FormPj.css";

const FormPj = () => {
  const [name1, setname1] = useState("");
  const [name2, setname2] = useState("");
  const [symbol1, setSymbol1] = useState("");
  const [symbol2, setSymbol2] = useState("");
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});

  // } else if (symbol1 === "O") {
  //   setSymbol2("X");
  // }

  const submitPj = (e) => {
    e.preventDefault();
    if (symbol1 === "X") {
      setSymbol2("O");
    } else if (symbol1 === "O") {
      setSymbol2("X");
    }
  };

  return (
    <main>
      <div className="form-container">
        <h3 className="text-center  pt-2">Selecciona tu símbolo</h3>
        <form className="form-players" onSubmit={submitPj}>
          <div className="form-item">
            <label htmlFor="player1">Tu:</label>
            <input
              type="text"
              placeholder="Escribe tu nombre"
              onChange={({ target }) => setname1(target.value)}
              value={name1}
            />
          </div>
          <div className="form-item">
            <label htmlFor="player2">Rival:</label>
            <input
              type="text"
              onChange={({ target }) => setname2(target.value)}
              value={name2}
              placeholder="Escribe tu nombre"
            />
          </div>
          <div className="btn-flex">
            <div className="btn-container">
              <button
                type="button"
                onClick={() => setSymbol1("X")}
                className="btn-symbol text-primary"
              >
                X
              </button>
              <button
                type="button"
                onClick={() => setSymbol1("O")}
                className="btn-symbol text-success"
              >
                O
              </button>
            </div>
            <div className="btn-container">
              {/* <Link to="game"> */}
              <button type="submit" className="btn-play text-primary">
                Jugar
              </button>
              {/* </Link> */}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FormPj;
