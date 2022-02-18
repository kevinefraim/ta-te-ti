import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Game.css";

const Game = ({ players, setPlayers }) => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const navigate = useNavigate();

  const [ganador, setGanador] = useState(null);
  const [ganadorPj, setGanadorPj] = useState("");

  useEffect(() => {
    if (ganador) {
      ganador === "X" ? setGanadorPj(players[0]) : setGanadorPj(players[1]);
    }
  }, [ganador]);

  //componente de cell
  const Cell = ({ num }) => {
    return (
      <div
        className={
          cells[num] === "X" ? "font-color-x cell" : "font-color-o cell"
        }
        onClick={() => handleClick(num)}
      >
        {cells[num]}
      </div>
    );
  };

  const handleGame = (cuadrados) => {
    //array de combinaciones para ganar
    let combinations = [
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      ,
    ];

    //validacion que setea un ganador
    combinations.map((comb) => {
      if (
        cuadrados[comb[0]] === "" ||
        cuadrados[comb[1]] === "" ||
        cuadrados[comb[2]] === ""
      ) {
        //nada
      } else if (
        cuadrados[comb[0]] === cuadrados[comb[1]] &&
        cuadrados[comb[1]] === cuadrados[comb[2]]
      ) {
        setGanador(cuadrados[comb[0]]);
      }
    });
  };

  //funcion que maneja el estado del turno
  const handleClick = (num) => {
    let cuadrados = [...cells];
    if (cells[num] !== "") return;
    if (turn === "X") {
      cuadrados[num] = "X";
      setTurn("O");
    } else {
      cuadrados[num] = "O";
      setTurn("X");
    }
    handleGame(cuadrados);
    setCells(cuadrados);
  };

  //funcion que retorna el array cells como inició
  const reset = () => {
    setGanador(null);
    setTurn("X");
    setPlayers([]);
    navigate("/");
    return setCells(Array(9).fill(""));
  };

  return (
    <main>
      <button onClick={reset} className="btn m-2 btn-primary">
        Reset
      </button>

      {ganador ? (
        <h2
          className={
            ganador === "X"
              ? "font-color-x text-center m2"
              : "font-color-o text-center m2"
          }
        >
          {ganadorPj} es el ganador
        </h2>
      ) : (
        <h2>{`${players[0]} VS ${players[1]}`}</h2>
      )}
      <div className="cell-container">
        <Cell num={0} />
        <Cell num={1} />
        <Cell num={2} />
        <Cell num={3} />
        <Cell num={4} />
        <Cell num={5} />
        <Cell num={6} />
        <Cell num={7} />
        <Cell num={8} />
      </div>
    </main>
  );
};

export default Game;
