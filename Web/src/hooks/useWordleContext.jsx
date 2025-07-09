import {createContext, useContext, useState} from "react";
import Api from "../services/Api.js";

const WordleContext = createContext({
    session: {sessionId: "", difficulty: {}, wordLenght: 0},
    turn: 0,
    currentGuess: "",
    guesses: [...Array(6)],
    history: [],
    isCorrect: false,
});

export const WordleProvider = ({ children }) => {
    const [session, setSession] = useState({sessionId: "", difficulty: {}, wordLenght: 0});
    const [turn, setTurn] = useState(0); //turno del 0 al 5
    const [currentGuess, setCurrentGuess] = useState(""); //la palabra
    const [guesses, setGuesses] = useState([...Array(6)]); //la estructura de la palabra por api
    const [history, setHistory] = useState([]); //lista de palabras usadas
    const [isCorrect, setIsCorrect] = useState(false);

    const addNewGuess = () => {
        Api.checkWord(session.sessionId, currentGuess)
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
                setCurrentGuess("");
            })
            .catch((e) => console.log("palabra incorrecta"));
    };

    const handleKeyup = ({ key }) => {
        if (key === "Enter") {
            if (turn > 5) {
                console.log("usaste todos los intentos!");
                return;
            }
            if (history.includes(currentGuess)) {
                console.log("ya jugaste esta palabra!");
                return;
            }
            if (currentGuess.length !== session.wordLenght) {
                console.log("faltan letras!");
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

    const newGame = (session) => {
        setSession(session);
        setTurn(0);
        setCurrentGuess("");
        setGuesses([...Array(6)]);
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
