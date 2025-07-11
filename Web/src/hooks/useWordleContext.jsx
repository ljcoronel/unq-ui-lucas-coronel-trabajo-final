import {createContext, useContext, useState} from "react";
import Api from "../services/Api.js";

const WordleContext = createContext({
    session: null,
    turn: 0,
    currentGuess: "",
    guesses: [...Array(6)],
    history: [],
    isCorrect: false,
    usedKeys: {},
    loading: false,
    error: null,
});

export const WordleProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const [turn, setTurn] = useState(0); //turno del 0 al 5
    const [currentGuess, setCurrentGuess] = useState(""); //la palabra
    const [guesses, setGuesses] = useState([...Array(6)]); //la estructura de la palabra por api
    const [history, setHistory] = useState([]); //lista de palabras usadas
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addNewGuess = () => {
        Api.checkWord(session.sessionId, currentGuess.toLowerCase())
            .then((response) => {
                setGuesses((prevGuesses) => {
                    const newGuesses = [...prevGuesses];
                    newGuesses[turn] = response;
                    return newGuesses;
                })
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
                        if (l.solution === "absent" && currentSolution !== ("correct" || "elsewhere")) {
                            prevUsedKeys[l.letter] = "absent";
                        }
                    })
                    return prevUsedKeys;
                })
                setCurrentGuess("");
            })
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
    };

    const handleKeyup = ({ key }) => {
        if (key === "Enter") {
            if (history.includes(currentGuess.toLowerCase())) {
                setError(new Error("Ya usaste esta palabra"));
                return;
            }
            if (currentGuess.length !== session.wordLenght) {
                setError(new Error("Una palabra demasiado corta"));
                return;
            }
            setLoading(true);
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

    const newGame = (session) => {
        setSession(session);
        setTurn(0);
        setCurrentGuess("");
        setGuesses([...Array(6)]);
        setHistory([]);
        setIsCorrect(false);
        setUsedKeys({});
        setLoading(false);
        setError(null);
    };

    return (
        <WordleContext.Provider value={{ session, turn, currentGuess, guesses, isCorrect, handleKeyup, newGame, usedKeys, loading, error }}>
            {children}
        </WordleContext.Provider>
    );
};

export const useWordleContext = () => useContext(WordleContext);
