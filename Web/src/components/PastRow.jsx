function PastRow({ guess }) {
    return (
        <div className="row">
            {guess.map((l, i) => (
                <div key={i} className={l.solution}>
                    {l.letter}
                </div>
            ))}
        </div>
    );
}

export default PastRow;
