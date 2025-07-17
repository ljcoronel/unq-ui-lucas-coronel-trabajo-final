import { useWordleContext } from "../hooks/useWordleContext.jsx";
import GameWon from "./GameWon.jsx";
import GameLost from "./GameLost.jsx";

function GameOver() {
    const { isCorrect, turn } = useWordleContext();

    return (
        <div>
            {isCorrect && <GameWon />}
            {!isCorrect && turn > 5 && <GameLost />}
        </div>
    );
}

export default GameOver;
