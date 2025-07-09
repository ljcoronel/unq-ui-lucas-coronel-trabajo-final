import {useWordleContext} from "../hooks/useWordleContext.jsx";

function MediumRow({ guess, currentTurn }) {
    const { turn, currentGuess, session } = useWordleContext();

    if (guess) {
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

    if (turn === currentTurn && currentGuess) {
        const letters = currentGuess.split("");

        return (
            <div className="row current">
                {letters.map((letter, i) => (
                    <div key={i} className="filled">
                        {letter}
                    </div>
                ))}
                {[...Array(session.wordLenght - letters.length)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        );
    }

    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default MediumRow;
