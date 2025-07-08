import {createContext, useContext, useState} from "react";

const WordleContext = createContext({
    turn: 0,
    currentGuess: "",
    guesses: [],
    history: [],
    isCorrect: false,
});

export const WordleProvider = ({ children }) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {};

    const addNewGuess = () => {};

    const handleKeyup = () => {};

    return (
        <WordleContext.Provider value={{ turn, currentGuess, guesses, isCorrect, handleKeyup }}>
            {children}
        </WordleContext.Provider>
    );
};

export const useWordleContext = () => useContext(WordleContext);
