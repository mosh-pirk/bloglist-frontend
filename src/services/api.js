import axios from 'axios';
import {getFromLocalStorage} from "../utils/methods.js";

const api = axios.create({
    baseURL: 'http://localhost:3003/',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = getFromLocalStorage('USER').token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const GET = async (url) =>  {
    const response = await api.get(url);
    return response.data;
}

export const POST = async (url, data) =>  {
    const response = await api.post(url, data);
    return response.data;
}

export const PUT = async (url, data) =>  {
    const response= await api.put(url, data);
    return response.data;
}

export const PATCH = async (url, data) =>  {
    const response= await api.patch(url, data);
    return response.data;
}

export const DELETE = async (url) =>  {
    const response = await api.delete(url);
    return response.data;
}
