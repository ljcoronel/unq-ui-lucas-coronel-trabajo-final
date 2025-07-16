import {useWordleContext} from "../hooks/useWordleContext.jsx";
import {useEffect, useState} from "react";

function GameError() {
    const { gameMessage } = useWordleContext();
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
    }, [gameMessage]);

    return (
        <div>
            {gameMessage && showMessage && (
                <div className="modal show fade d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-warning text-white">
                                <h5 className="modal-title">Error</h5>
                            </div>
                            <div className="modal-body">
                                <p>{gameMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GameError;
