import {useWordleContext} from "../hooks/useWordleContext.jsx";
import EasyRow from "./EasyRow.jsx";

function EasyGrid() {
    const { guesses } = useWordleContext();

    return (
        <div>
            {guesses.map((g, i) => {
                return <EasyRow key={i} guess={g} currentTurn={i} />
            })}
        </div>
    );
}

export default EasyGrid;
