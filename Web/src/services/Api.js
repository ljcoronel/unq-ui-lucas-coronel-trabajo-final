import axios from "axios";
import { API_URL } from "../constants.js";

const baseURL = API_URL;

const getDifficulties = () => axios.get(`/api/difficulties`, { baseURL })
    .then(response => response.data);

const getGameSession = (id) => axios.get(`/api/difficulties/${id}`, { baseURL })
    .then(response => response.data)
    .catch(error => {if (error.response.status === 404) throw Error(error.response.data.message)});

const checkWord = (sessionId, word) => axios.post(`/api/checkWord`, { sessionId, word }, { baseURL })
    .then(response => response.data)
    .catch(error => {if (error.response.status === 400 || error.response.status === 404) throw Error(error.response.data.message)});

export default {
    getDifficulties,
    getGameSession,
    checkWord,
};