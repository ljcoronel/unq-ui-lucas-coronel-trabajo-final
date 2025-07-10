import {useWordleContext} from "../hooks/useWordleContext.jsx";
import PastRow from "./PastRow.jsx";
import CurrentRow from "./CurrentRow.jsx";

function Row({ guess, currentTurn }) {
    const { turn, currentGuess, session } = useWordleContext();

    if (guess) {
        return (
            <PastRow guess={guess} />
        );
    }

    if (turn === currentTurn && currentGuess) {
        const letters = currentGuess.split("");
        return (
            <CurrentRow letters={letters} />
        );
    }

    return (
        <div className="row">
            {Array.from({ length: session.wordLenght }).map((_, i) => (
                <div key={i} />
            ))}
        </div>
    );
}

export default Row;
