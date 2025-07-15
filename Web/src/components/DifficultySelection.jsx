import {useWordleContext} from "../hooks/useWordleContext.jsx";
import Api from "../services/Api.js";
import {useEffect, useState} from "react";
import GenericError from "./GenericError.jsx";

function DifficultySelection({ handleDifficulty }) {
    const { loading } = useWordleContext();
    const [difficulties, setDifficulties] = useState([]);
    const [screenLoading, setScreenLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (error) {
        return (
            <GenericError error={error} />
        );
    }

    return (
        <div>
            <div className="fs-5">Seleccionar dificultad</div>
            <div className="btn-group mb-3">
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
