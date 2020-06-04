import axios from './axios';

const usersAPI = {
    getUsers: (perPage, page) => {
        return axios.get(`/users?count=${perPage}&page=${page}`).then(response => response.data)
    },
    followUser: userId => {
        return axios.post(`/follow/${userId}`).then(response => response.data.resultCode)
    },
    unfollowUser: userId => {
        return axios.delete(`/follow/${userId}`).then(response => response.data.resultCode)
    }
}

export default usersAPI;