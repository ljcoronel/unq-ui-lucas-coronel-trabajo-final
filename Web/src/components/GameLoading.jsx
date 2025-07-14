import {useWordleContext} from "../hooks/useWordleContext.jsx";

function GameLoading() {
    const { loading } = useWordleContext();

    return (
        <div>
            {loading && (
                <div className="modal show fade d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-info text-white">
                                <h5 className="modal-title">Cargando...</h5>
                            </div>
                            <div className="modal-body">
                                <p>Por favor espere</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GameLoading;
