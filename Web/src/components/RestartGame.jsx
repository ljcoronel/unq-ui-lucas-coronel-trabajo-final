import { useWordleContext } from "../hooks/useWordleContext.jsx";

function RestartGame({ onClick }) {
    const { session } = useWordleContext();

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={onClick}>Reiniciar en {session.difficulty.name}</button>
        </div>
    );
}

export default RestartGame;
