function GenericError({ error }) {
    return (
        <div>
            {error && (
                <h1 className="text-uppercase text-bg-danger">{error.message}</h1>
            )}
        </div>
    );
}

export default GenericError;
