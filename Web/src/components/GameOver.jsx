import RestartGame from "./RestartGame.jsx";
import {useWordleContext} from "../hooks/useWordleContext.jsx";

function GameOver({ handleDifficulty }) {
    const { isCorrect, turn, session } = useWordleContext();

    return (
        <div>
            {isCorrect && (
                <div>
                    <div>¡Ganaste! 🏆</div>
                    <div>Adivinaste la palabra en {turn} {turn === 1 ? "intento" : "intentos"}</div>
                </div>
            )}
            {!isCorrect && turn === 6 && (
                <div>
                    <div>¡Perdiste!</div>
                    <div>Usaste los 6 intentos</div>
                </div>
            )}
            {(isCorrect || turn === 6) && <RestartGame onClick={() => handleDifficulty(session.difficulty.id)} />}
        </div>
    );
}

export default GameOver;
