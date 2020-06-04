import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "609beadf-bc15-4a73-a6f4-84557bfd3fd3",
    }
});

export default instance;