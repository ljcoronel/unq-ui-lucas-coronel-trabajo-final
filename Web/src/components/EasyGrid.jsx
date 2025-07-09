import {useWordleContext} from "../hooks/useWordleContext.jsx";
import EasyRow from "./EasyRow.jsx";

function EasyGrid() {
    const { guesses, currentGuess, turn } = useWordleContext();

    return (
        <div>
            {guesses.map((g, i) => {
                return <EasyRow key={i} />
            })}
        </div>
    );
}

export default EasyGrid;