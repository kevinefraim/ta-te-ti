import { useState } from "react";
import "./Game.css";

const Game = (players) => {
  console.log(players);
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [ganador, setGanador] = useState();

  //componente de cell
  const Cell = ({ num }) => {
    return (
      <div onClick={() => handleClick(num)} className="cell">
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
    return setCells(Array(9).fill(""));
  };

  return (
    <main>
      <button onClick={reset} className="btn btn-primary">
        reset
      </button>
      {/* {ganador && (
        <p className="text-center">
          {ganador === "X" ? name1 : name2} es el ganador
        </p>
      )} */}
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
