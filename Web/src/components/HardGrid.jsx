import {useWordleContext} from "../hooks/useWordleContext.jsx";
import HardRow from "./HardRow.jsx";

function HardGrid() {
    const { guesses, currentGuess, turn } = useWordleContext();

    return (
        <div>
            {guesses.map((g, i) => {
                return <HardRow key={i} />
            })}
        </div>
    );
}

export default HardGrid;