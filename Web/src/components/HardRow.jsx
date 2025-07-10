import {useWordleContext} from "../hooks/useWordleContext.jsx";
import PastRow from "./PastRow.jsx";
import CurrentRow from "./CurrentRow.jsx";

function HardRow({ guess, currentTurn }) {
    const { turn, currentGuess } = useWordleContext();

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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default HardRow;
