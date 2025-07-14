import {useEffect, useState} from "react";
import Api from "../services/Api.js";
import {useWordleContext} from "../hooks/useWordleContext.jsx";
import Grid from "./Grid.jsx";
import DifficultySelection from "./DifficultySelection.jsx";
import GameOver from "./GameOver.jsx";
import GameError from "./GameError.jsx";
import GameLoading from "./GameLoading.jsx";
import GenericError from "./GenericError.jsx";
import Keypad from "./Keypad.jsx";

function Wordle() {
    const { session , turn, isCorrect, handleKeyup, newGame, loading } = useWordleContext();
    const { error, setError } = useState(null);

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
            .catch(e => setError(e));
    };

    return (
        <div>
            <DifficultySelection handleDifficulty={handleDifficulty} />
            {session && (
                <div>
                    <Grid />
                    <Keypad />
                </div>
            )}
            <GameLoading />
            <GameOver handleDifficulty={handleDifficulty} />
            <GameError />
            <GenericError error={error} />
        </div>
    )
}

export default Wordle;
