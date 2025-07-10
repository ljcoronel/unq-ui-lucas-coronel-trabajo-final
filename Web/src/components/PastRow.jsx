function PastRow({ guess }) {
    return (
        <div className="row past">
            {guess.map((l, i) => (
                <div key={i} className={l.solution}>
                    {l.letter}
                </div>
            ))}
        </div>
    );
}

export default PastRow;
