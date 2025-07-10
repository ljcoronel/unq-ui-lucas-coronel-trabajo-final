import {useWordleContext} from "../hooks/useWordleContext.jsx";
import HardRow from "./HardRow.jsx";

function HardGrid() {
    const { guesses } = useWordleContext();

    return (
        <div>
            {guesses.map((g, i) => {
                return <HardRow key={i} guess={g} currentTurn={i} />
            })}
        </div>
    );
}

export default HardGrid;
