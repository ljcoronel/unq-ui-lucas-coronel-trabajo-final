import {useWordleContext} from "../hooks/useWordleContext.jsx";
import ExpertRow from "./ExpertRow.jsx";

function ExpertGrid() {
    const { guesses, currentGuess, turn } = useWordleContext();

    return (
        <div>
            {guesses.map((g, i) => {
                return <ExpertRow key={i} guess={g} currentTurn={i} />
            })}
        </div>
    );
}

export default ExpertGrid;
