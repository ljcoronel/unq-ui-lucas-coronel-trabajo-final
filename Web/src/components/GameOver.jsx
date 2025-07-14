import RestartGame from "./RestartGame.jsx";
import {useWordleContext} from "../hooks/useWordleContext.jsx";

function GameOver({ handleDifficulty }) {
    const { isCorrect, turn, session } = useWordleContext();

    return (
        <div>
            {isCorrect && (
                <div className="modal show fade d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5 className="modal-title">¡Ganaste! 🏆</h5>
                            </div>
                            <div className="modal-body">
                                <p>Adivinaste la palabra en {turn} {turn === 1 ? "intento" : "intentos"}</p>
                            </div>
                            <div className="modal-footer">
                                <RestartGame onClick={() => handleDifficulty(session.difficulty.id)} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!isCorrect && turn > 5 && (
                <div className="modal show fade d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-danger text-white">
                                <h5 className="modal-title">¡Perdiste!</h5>
                            </div>
                            <div className="modal-body">
                                <p>Usaste los 6 intentos</p>
                            </div>
                            <div className="modal-footer">
                                <RestartGame onClick={() => handleDifficulty(session.difficulty.id)} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GameOver;
