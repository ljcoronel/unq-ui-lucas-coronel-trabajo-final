import { useWordleContext } from "../hooks/useWordleContext.jsx";
import RestartGame from "./RestartGame.jsx";
import Confetti from "react-confetti";

function GameWon() {
    const { turn, session, handleDifficulty } = useWordleContext();

    return (
        <div>
            <div className="modal show fade d-block" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-success text-white">
                            <h5 className="modal-title">¡Ganaste! 🏆</h5>
                        </div>
                        <div className="modal-body">
                            <p>Adivinaste la palabra en {turn} {turn === 1 ? "intento" : "intentos"}.</p>
                        </div>
                        <div className="modal-footer">
                            <RestartGame onClick={() => handleDifficulty(session.difficulty.id)} />
                        </div>
                    </div>
                </div>
            </div>
            <Confetti />
        </div>
    );
}

export default GameWon;
