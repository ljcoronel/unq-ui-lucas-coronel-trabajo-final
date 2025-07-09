import {useEffect, useState} from "react";
import Api from "../services/Api.js";
import EasyGrid from "./EasyGrid.jsx";
import MediumGrid from "./MediumGrid.jsx";
import HardGrid from "./HardGrid.jsx";
import ExpertGrid from "./ExpertGrid.jsx";
import {useWordleContext} from "../hooks/useWordleContext.jsx";

function Wordle() {
    const { session , currentGuess, guesses, turn, isCorrect, handleKeyup, newGame } = useWordleContext();
    const [difficulties, setDifficulties] = useState([]);

    useEffect(() => {
        document.addEventListener("keyup", handleKeyup);
        return () => document.removeEventListener("keyup", handleKeyup);
    }, [handleKeyup]);

    useEffect(() => {
        Api.getDifficulties()
            .then(response => setDifficulties(response))
            .catch(e => console.log(e.message));
    }, []);

    const handleDifficulty = (id) => {
        Api.getGameSession(id)
            .then((response) => newGame(response))
            .catch(e => console.log(e.message));
    }

    return (
        <div>
            <div>Seleccionar dificultad</div>
            {difficulties.map((difficulty) => (
                <button key={difficulty.id} type="button" className="btn btn-primary" onClick={() => handleDifficulty(difficulty.id)}>
                    {difficulty.name}
                </button>
            ))
            }
            {session && session.wordLenght === 4 ? (
                <EasyGrid />
            ) : session.wordLenght === 5 ? (
                <MediumGrid />
            ) : session.wordLenght === 6 ? (
                <HardGrid />
            ) : session.wordLenght === 7 && (
                <ExpertGrid />
            )}
        </div>
    )
}

export default Wordle;
