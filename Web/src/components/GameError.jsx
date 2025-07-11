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
            {error && showError && <div>{error.message}</div>}
        </div>
    );
}

export default GameOver;
