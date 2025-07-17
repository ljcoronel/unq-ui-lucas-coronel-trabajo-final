import { useEffect, useState } from "react";
import { useWordleContext } from "../hooks/useWordleContext.jsx";
import Api from "../services/Api.js";

function DifficultySelection() {
    const { loading, handleDifficulty, setError } = useWordleContext();
    const [difficulties, setDifficulties] = useState([]);
    const [screenLoading, setScreenLoading] = useState(true);

    useEffect(() => {
        Api.getDifficulties()
            .then(response => setDifficulties(response))
            .catch(e => setError(e))
            .finally(() => setScreenLoading(false));
    }, []);

    const handleClick = (e, id) => {
        e.currentTarget.blur();
        handleDifficulty(id);
    };

    if (screenLoading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <div>
            <p className="fs-5">Seleccionar dificultad</p>
            <div className="btn-group mb-2">
                {difficulties.map((difficulty) => (
                    <button key={difficulty.id} type="button" className="btn btn-primary" disabled={loading} onClick={(e) => handleClick(e, difficulty.id)}>
                        {difficulty.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default DifficultySelection;
