import {useWordleContext} from "../hooks/useWordleContext.jsx";
import {useEffect, useState} from "react";

function GameOver() {
    const { error } = useWordleContext();
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
    }, [error]);

    return (
        <div>
            {error && showError && (
                <div className="modal show fade d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-warning text-white">
                                <h5 className="modal-title">Error</h5>
                            </div>
                            <div className="modal-body">
                                <p>{error.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GameOver;
