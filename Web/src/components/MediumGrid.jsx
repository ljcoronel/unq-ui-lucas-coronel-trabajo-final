import {useWordleContext} from "../hooks/useWordleContext.jsx";
import MediumRow from "./MediumRow.jsx";

function MediumGrid() {
    const { guesses, currentGuess, turn } = useWordleContext();

    return (
        <div>
            {guesses.map((g, i) => {
                return <MediumRow key={i} guess={g} currentTurn={i} />
            })}
        </div>
    );
}

export default MediumGrid;
