import {useWordleContext} from "../hooks/useWordleContext.jsx";
import GameWon from "./GameWon.jsx";
import GameLost from "./GameLost.jsx";

function GameOver({ handleDifficulty }) {
    const { isCorrect, turn } = useWordleContext();

    return (
        <div>
            {isCorrect && <GameWon handleDifficulty={handleDifficulty} />}
            {!isCorrect && turn > 5 && <GameLost handleDifficulty={handleDifficulty} />}
        </div>
    );
}

export default GameOver;
