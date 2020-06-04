import axios from './axios';

const authAPI = {
    getMe: () => axios.get(`/auth/me`).then(response => response.data),
    login: userData => axios.post('/auth/login', userData).then(response => response.data),
    logout: () => axios.delete('/auth/login').then(response => response.data)
}

export default authAPI;