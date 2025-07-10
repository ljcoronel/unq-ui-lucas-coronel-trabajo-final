import {useWordleContext} from "../hooks/useWordleContext.jsx";
import Row from "./Row.jsx";

function Grid() {
    const { guesses } = useWordleContext();

    return (
        <div>
            {guesses.map((g, i) => {
                return <Row key={i} guess={g} currentTurn={i} />
            })}
        </div>
    );
}

export default Grid;
