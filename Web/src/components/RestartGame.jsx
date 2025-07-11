import {useWordleContext} from "../hooks/useWordleContext.jsx";

function RestartGame({ onClick }) {
    const { session } = useWordleContext();

    return (
        <div>
            <div>¿Volver a jugar en dificultad {session.difficulty.name}?</div>
            <div>
                <button type="button" className="btn btn-primary" onClick={onClick}>Reiniciar</button>
            </div>
        </div>
    );
}

export default RestartGame;
