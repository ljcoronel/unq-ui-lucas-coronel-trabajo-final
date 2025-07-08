import axios from "axios";
import { API_URL } from "../constants.js";

const baseURL = API_URL;

const errorHandler = (error, code, message) => {if (error.response.status === code) throw Error(message)};

const getDifficulties = () => axios.get(`/api/difficulties`, { baseURL })
    .then(response => response.data)
    .catch(error => errorHandler(error, 500, "Error del servidor"));

const getGameSession = (id) => axios.get(`/api/difficulties/${id}`, { baseURL })
    .then(response => response.data)
    .catch(error => {
        errorHandler(error, 500, "Error del servidor");
        errorHandler(error, 404, "No se encontró la dificultad");
    });

const checkWord = (sessionId, word) => axios.post(`/api/checkWord`, { sessionId, word }, { baseURL })
    .then(response => response.data)
    .catch(error => {
        errorHandler(error, 500, "Error del servidor");
        errorHandler(error, 404, "No se encontró la sesión");
        errorHandler(error, 400, "Palabra incorrecta");
    });

export default {
    getDifficulties,
    getGameSession,
    checkWord,
};
