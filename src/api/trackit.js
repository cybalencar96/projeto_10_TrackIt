import axios from "axios";

const TRACK_API_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit`

function getHabits(config) {
    const promise = axios.get(`${TRACK_API_URL}/habits`,config);
    return promise;
}

function postHabit(data,config) {
    const promise = axios.post(`${TRACK_API_URL}/habits`,data,config);
    return promise;
}

function deleteHabit(habitId,config) {
    const promise = axios.delete(`${TRACK_API_URL}/habits/${habitId}`,config);
    return promise;
}

function getTodayHabits(config) {
    const promise = axios.get(`${TRACK_API_URL}/habits/today`,config);
    return promise;
}

function checkHabit(habitId,config) {
    const promise = axios.post(`${TRACK_API_URL}/habits/${habitId}/check`,{},config);
    return promise;
}

function uncheckHabit(habitId,config) {
    const promise = axios.post(`${TRACK_API_URL}/habits/${habitId}/uncheck`,{},config);
    return promise;
}

function getHistory() {
    const promise = axios.get(`${TRACK_API_URL}/habits/history/daily`);
    return promise;
}

export {
    getHabits,
    postHabit,
    deleteHabit,
    getTodayHabits,
    checkHabit,
    uncheckHabit,
    getHistory
}