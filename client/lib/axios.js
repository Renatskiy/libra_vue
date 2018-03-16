import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 8000,
});

export const post = async (url, data = {}) => (await instance.post(url, data)).data;
export const get  = async (url) => (await instance.get(url)).data;

