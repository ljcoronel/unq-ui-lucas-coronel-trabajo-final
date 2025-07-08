import {createContext, useContext, useState} from "react";

const WordleContext = createContext({
    session: {sessionId: "", difficulty: {}, wordLenght: 0},
    turn: 0,
    currentGuess: "",
    guesses: [],
    history: [],
    isCorrect: false,
});

export const WordleProvider = ({ children }) => {
    const [session, setSession] = useState({sessionId: "", difficulty: {}, wordLenght: 0});
    const [turn, setTurn] = useState(0); //turno del 0 al 5
    const [currentGuess, setCurrentGuess] = useState(""); //la palabra
    const [guesses, setGuesses] = useState([]); //la estructura de la palabra por api
    const [history, setHistory] = useState([]); //lista de palabras usadas
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {};

    const addNewGuess = () => {};

    const handleKeyup = ({ key }) => {
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
        setGuesses([]);
        setHistory([]);
        setIsCorrect(false);
    };

    return (
        <WordleContext.Provider value={{ session, turn, currentGuess, guesses, isCorrect, handleKeyup, newGame }}>
            {children}
        </WordleContext.Provider>
    );
};

export const useWordleContext = () => useContext(WordleContext);
