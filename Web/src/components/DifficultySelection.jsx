import {useWordleContext} from "../hooks/useWordleContext.jsx";
import Api from "../services/Api.js";
import {useEffect, useState} from "react";

function DifficultySelection({ handleDifficulty }) {
    const { loading } = useWordleContext();
    const [difficulties, setDifficulties] = useState([]);
    const [screenLoading, setScreenLoading] = useState(true);

    useEffect(() => {
        Api.getDifficulties()
            .then(response => setDifficulties(response))
            .catch(e => console.log(e.message))
            .finally(() => setScreenLoading(false));
    }, []);

    const handleClick = (e, id) => {
        e.currentTarget.blur();
        handleDifficulty(id);
    };

    if (screenLoading) {
        return (
            <div>Cargando...</div>
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
