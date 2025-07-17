import { useWordleContext } from "../hooks/useWordleContext.jsx";
import RestartGame from "./RestartGame.jsx";

function GameLost() {
    const { session, handleDifficulty } = useWordleContext();

    return (
        <div className="modal show fade d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-danger text-white">
                        <h5 className="modal-title">¡Perdiste!</h5>
                    </div>
                    <div className="modal-body">
                        <p>Usaste los 6 intentos.</p>
                    </div>
                    <div className="modal-footer">
                        <RestartGame onClick={() => handleDifficulty(session.difficulty.id)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameLost;
