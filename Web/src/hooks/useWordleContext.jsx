import {createContext, useContext, useState} from "react";
import Api from "../services/Api.js";

const WordleContext = createContext({
    session: null,
    turn: 0,
    currentGuess: "",
    guesses: [...Array(6)],
    isCorrect: false,
    usedKeys: {},
    loading: false,
    gameMessage: "",
    error: null,
    handleKeyup: () => null,
    handleDifficulty: () => null,
    resetMessage: () => null,
    setError: () => null,
});

export const WordleProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState([...Array(6)]); //la estructura de la palabra por api
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});
    const [loading, setLoading] = useState(false);
    const [gameMessage, setGameMessage] = useState("");
    const [error, setError] = useState(null);

    const handleKeyup = ({ key }) => {
        console.log(key);
        if (key === "Enter") {
            if (history.includes(currentGuess.toLowerCase())) {
                setGameMessage("Ya usaste esta palabra");
                return;
            }
            if (currentGuess.length !== session.wordLenght) {
                setGameMessage("Una palabra demasiado corta");
                return;
            }
            addNewGuess();
        }
        if (key === "Backspace") {
            setCurrentGuess((prev) => prev.slice(0, -1));
            return;
        }
        if (/^[A-Za-zÑñ]$/.test(key)) {
            if (currentGuess.length < session.wordLenght) {
                setCurrentGuess(prev => prev + key);
            }
        }
    };

    const addNewGuess = () => {
        setLoading(true);
        Api.checkWord(session.sessionId, currentGuess.toLowerCase())
            .then((response) => handleWord(response))
            .catch((e) => (e.message === "Palabra incorrecta") ? setGameMessage(e.message) : setError(e))
            .finally(() => setLoading(false));
    };

    const handleWord = (response) => {
        setGuesses((prevGuesses) => {
            const newGuesses = [...prevGuesses];
            newGuesses[turn] = response;
            return newGuesses;
        });
        setIsCorrect(response.every((l) => l.solution === "correct"));
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
        });
        setTurn((prevTurn) => {
            return (prevTurn + 1);
        });
        setUsedKeys((prevUsedKeys) => {
            response.forEach((l) => {
                const currentSolution = prevUsedKeys[l.letter];
                if (l.solution === "correct") {
                    prevUsedKeys[l.letter] = "correct";
                    return;
                }
                if (l.solution === "elsewhere" && currentSolution !== "correct") {
                    prevUsedKeys[l.letter] = "elsewhere";
                    return;
                }
                if (l.solution === "absent" && currentSolution !== "correct" && currentSolution !== "elsewhere") {
                    prevUsedKeys[l.letter] = "absent";
                }
            });
            return prevUsedKeys;
        });
        setCurrentGuess("");
    };

    const handleDifficulty = (id) => {
        setLoading(true);
        Api.getGameSession(id)
            .then((response) => newGame(response))
            .catch(e => setError(e))
            .finally(() => setLoading(false));
    };

    const newGame = (session) => {
        setSession(session);
        setTurn(0);
        setCurrentGuess("");
        setGuesses([...Array(6)]);
        setHistory([]);
        setIsCorrect(false);
        setUsedKeys({});
        setLoading(false);
        setGameMessage("");
        setError(null);
    };

    const resetMessage = () => {
        setGameMessage("");
    };

    return (
        <WordleContext.Provider
            value={{
                session,
                turn,
                currentGuess,
                guesses,
                isCorrect,
                usedKeys,
                loading,
                gameMessage,
                error,
                handleKeyup,
                handleDifficulty,
                resetMessage,
                setError
        }}>
            {children}
        </WordleContext.Provider>
    );
};

export const useWordleContext = () => useContext(WordleContext);
