import {useEffect, useState} from "react";
import Api from "../services/Api.js";
import {useWordleContext} from "../hooks/useWordleContext.jsx";
import Keypad from "./Keypad.jsx";
import Grid from "./Grid.jsx";

function Wordle() {
    const { session , turn, isCorrect, handleKeyup, newGame } = useWordleContext();
    const [difficulties, setDifficulties] = useState([]);

    useEffect(() => {
        document.addEventListener("keyup", handleKeyup);
        if (isCorrect) {
            document.removeEventListener("keyup", handleKeyup);
        }
        if (turn > 5) {
            document.removeEventListener("keyup", handleKeyup);
        }
        return () => document.removeEventListener("keyup", handleKeyup);
    }, [handleKeyup, isCorrect, turn]);

    useEffect(() => {
        Api.getDifficulties()
            .then(response => setDifficulties(response))
            .catch(e => console.log(e.message));
    }, []);

    const handleClick = (e, id) => {
        e.currentTarget.blur();
        handleDifficulty(id);
    };

    const handleDifficulty = (id) => {
        Api.getGameSession(id)
            .then((response) => newGame(response))
            .catch(e => console.log(e.message));
    };

    return (
        <div>
            <div className="fs-5">Seleccionar dificultad</div>
            <div className="btn-group mb-3">
                {difficulties.map((difficulty) => (
                    <button key={difficulty.id} type="button" className="btn btn-primary" onClick={(e) => handleClick(e, difficulty.id)}>
                        {difficulty.name}
                    </button>
                ))}
            </div>
            {session && (
                <div>
                    <Grid />
                    <Keypad />
                </div>
            )}
            {isCorrect && <div>¡Ganaste! 🏆</div>}
            {!isCorrect && turn === 6 && <div>¡Perdiste!</div>}
            {(isCorrect || turn === 6) && (
                <div>
                    <div>Volver a jugar en dificultad {session.difficulty.name}</div>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => handleDifficulty(session.difficulty.id)}>Reiniciar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Wordle;
