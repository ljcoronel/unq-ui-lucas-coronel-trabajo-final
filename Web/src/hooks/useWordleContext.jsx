import {createContext, useContext, useState} from "react";

const WordleContext = createContext({
    turn: 0,
    currentGuess: "",
    guesses: [],
    history: [],
    isCorrect: false,
});

export const WordleProvider = ({ children }) => {
    const [turn, setTurn] = useState(0); //turno del 0 al 5
    const [currentGuess, setCurrentGuess] = useState(""); //la palabra
    const [guesses, setGuesses] = useState([]); //la estructura de la palabra por api
    const [history, setHistory] = useState([]); //lista de palabras usadas
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
