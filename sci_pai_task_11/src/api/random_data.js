import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://random-data-api.com/api/v2',
});

export const api = (endpoint, size=1) => {
    return instance.get(`/${endpoint}?size=${size}`);
}
