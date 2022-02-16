import { useState } from "react";
import "./Game.css";

const Game = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [ganador, setGanador] = useState();

  const Cell = ({ num }) => {
    return (
      <div onClick={() => handleClick(num)} className="cell">
        {cells[num]}
      </div>
    );
  };

  const handleGame = (cuadrados) => {
    let combinations = {
      diag: [
        [0, 4, 8],
        [2, 4, 6],
      ],
      vert: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      horiz: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
    };
    for (let comb in combinations) {
      combinations[comb].map((patron) => {
        if (
          cuadrados[patron[0]] === "" ||
          cuadrados[patron[1]] === "" ||
          cuadrados[patron[2]] === ""
        ) {
          //nada
        } else if (
          cuadrados[patron[0]] === cuadrados[patron[1]] &&
          cuadrados[patron[1]] === cuadrados[patron[2]]
        ) {
          setGanador(cuadrados[patron[0]]);
        }
      });
    }
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

  const reset = () => {
    setGanador(null);
    setCells(Array(9).fill(""));
  };

  return (
    <main>
      <button onClick={reset} className="btn btn-primary">
        reset
      </button>
      {ganador && <p className="text-center">{ganador} es el ganador</p>}
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
