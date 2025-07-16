import {useEffect} from "react";
import {useWordleContext} from "../hooks/useWordleContext.jsx";
import GameHeader from "./GameHeader.jsx";
import DifficultySelection from "./DifficultySelection.jsx";
import Grid from "./Grid.jsx";
import GameLoading from "./GameLoading.jsx";
import GameError from "./GameError.jsx";
import GameOver from "./GameOver.jsx";
import GenericError from "./GenericError.jsx";

function Wordle() {
    const { session , error, isCorrect, turn, loading, handleKeyup } = useWordleContext();

    useEffect(() => {
        document.addEventListener("keyup", handleKeyup);
        if (isCorrect || (turn > 5) || loading || (!session)) {
            document.removeEventListener("keyup", handleKeyup);
        }
        return () => document.removeEventListener("keyup", handleKeyup);
    }, [handleKeyup, isCorrect, turn, loading]);

    if (error) {
        return (
            <GenericError />
        );
    }

    return (
        <div>
            <GameHeader />
            <DifficultySelection />
            {session && <Grid />}
            <GameLoading />
            <GameError />
            <GameOver />
        </div>
    )
}

export default Wordle;
