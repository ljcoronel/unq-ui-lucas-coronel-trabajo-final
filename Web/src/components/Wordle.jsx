import {useEffect, useState} from "react";
import Api from "../services/Api.js";
import {useWordleContext} from "../hooks/useWordleContext.jsx";
import Grid from "./Grid.jsx";
import DifficultySelection from "./DifficultySelection.jsx";
import GameOver from "./GameOver.jsx";
import GameError from "./GameError.jsx";
import GameLoading from "./GameLoading.jsx";
import GenericError from "./GenericError.jsx";
import GameHeader from "./GameHeader.jsx";

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

    if (error) {
        return (
            <GenericError error={error} />
        );
    }

    return (
        <div>
            <GameHeader />
            <DifficultySelection handleDifficulty={handleDifficulty} />
            {session && <Grid />}
            <GameLoading />
            <GameOver handleDifficulty={handleDifficulty} />
            <GameError />
        </div>
    )
}

export default Wordle;
