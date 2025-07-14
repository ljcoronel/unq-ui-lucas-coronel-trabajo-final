function GenericError({ error }) {
    return (
        <div>
            {error && (
                <h1>{error.message}</h1>
            )}
        </div>
    );
}

export default GenericError;
