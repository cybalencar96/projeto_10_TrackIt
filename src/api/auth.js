import axios from 'axios'

const AUTH_API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth'

function signup(data) {
    const promise = axios.post(`${AUTH_API_URL}/sign-up`,data);
    return promise;
}

function login(data) {
    const promise = axios.post(`${AUTH_API_URL}/login`,data);
    return promise;
}

export {
    signup,
    login
}