import axios from './axios';

const profileAPI = {
    get: userId => axios.get(`/profile/${userId}`).then(response => response.data),
    getStatus: userId => axios.get('/profile/status/' + userId).then(response => response.data),
    setStatus: status => axios.put('/profile/status/', {status}).then(response => response.data)
}

export default profileAPI;