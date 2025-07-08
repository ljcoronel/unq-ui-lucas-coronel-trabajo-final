import {useEffect, useState} from "react";
import Api from "../services/Api.js";
import EasyWordle from "./EasyWordle.jsx";
import MediumWordle from "./MediumWordle.jsx";
import HardWordle from "./HardWordle.jsx";
import ExpertWordle from "./ExpertWordle.jsx";

function Wordle() {
    const [difficulties, setDifficulties] = useState([]);
    const [session, setSession] = useState({});

    useEffect(() => {
        Api.getDifficulties()
            .then(response => setDifficulties(response))
            .catch(e => console.log(e.message));
    }, []);

    const handleDifficulty = (id) => {
        Api.getGameSession(id)
            .then((response) => setSession(response))
            .catch(e => console.log(e.message));
    }

    return (
        <div>
            <div>Seleccionar dificultad</div>
            {difficulties.map((difficulty) => (
                <button type="button" className="btn btn-primary" onClick={() => handleDifficulty(difficulty.id)}>
                    {difficulty.name}
                </button>
            ))
            }
            {session && session.wordLenght === 4 ? (
                <EasyWordle />
            ) : session.wordLenght === 5 ? (
                <MediumWordle />
            ) : session.wordLenght === 6 ? (
                <HardWordle />
            ) : session.wordLenght === 7 && (
                <ExpertWordle />
            )}
        </div>
    )
}

export default Wordle;
