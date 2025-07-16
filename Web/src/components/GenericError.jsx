import {useWordleContext} from "../hooks/useWordleContext.jsx";

function GenericError() {
    const { error } = useWordleContext();

    return (
        <div>
            {error && (
                <h1 className="text-uppercase text-bg-danger">{error.message}</h1>
            )}
        </div>
    );
}

export default GenericError;
