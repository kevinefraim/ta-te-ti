import { Link } from "react-router-dom";
import "./FormPj.css";

const FormPj = () => {
  return (
    <main>
      <div className="form-container">
        <h3 className="text-center  pt-2">Selecciona tu símbolo</h3>
        <form className="form-players">
          <div className="form-item">
            <label htmlFor="player1">Tu:</label>
            <input type="text" placeholder="Escribe tu nombre" />
          </div>
          <div className="form-item">
            <label htmlFor="player2">Rival:</label>
            <input type="text" placeholder="Escribe tu nombre" />
          </div>
          <div className="btn-flex">
            <div className="btn-container">
              <button type="button" className="btn-symbol text-primary">
                X
              </button>
              <button type="button" className="btn-symbol text-success">
                O
              </button>
            </div>
            <div className="btn-container">
              <Link to="game">
                <button type="submit" className="btn-play text-primary">
                  Jugar
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FormPj;
