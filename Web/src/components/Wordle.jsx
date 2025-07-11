import {useEffect} from "react";
import Api from "../services/Api.js";
import {useWordleContext} from "../hooks/useWordleContext.jsx";
import Grid from "./Grid.jsx";
import DifficultySelection from "./DifficultySelection.jsx";
import GameOver from "./GameOver.jsx";
import GameError from "./GameError.jsx";

function Wordle() {
    const { session , turn, isCorrect, handleKeyup, newGame, loading } = useWordleContext();

    useEffect(() => {
        document.addEventListener("keyup", handleKeyup);
        if (isCorrect || (turn > 5) || loading || (!session)) {
            document.removeEventListener("keyup", handleKeyup);
        }
        return () => document.removeEventListener("keyup", handleKeyup);
    }, [handleKeyup, isCorrect, turn, loading]);

    const handleDifficulty = (id) => {
        Api.getGameSession(id)
            .then((response) => newGame(response))
            .catch(e => console.log(e.message));
    };

    return (
        <div>
            <DifficultySelection handleDifficulty={handleDifficulty} />
            {session && <Grid />}
            <GameOver handleDifficulty={handleDifficulty} />
            <GameError />
        </div>
    )
}

export default Wordle;
