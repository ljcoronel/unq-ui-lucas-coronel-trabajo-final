import {useWordleContext} from "../hooks/useWordleContext.jsx";
import MediumRow from "./MediumRow.jsx";

function MediumGrid() {
    const { guesses } = useWordleContext();

    return (
        <div>
            {guesses.map((g, i) => {
                return <MediumRow key={i} guess={g} currentTurn={i} />
            })}
        </div>
    );
}

export default MediumGrid;
