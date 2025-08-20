import axios, { type AxiosInstance} from 'axios';

export const api: AxiosInstance = axios.create({
    baseURL: process.env.BUN_PUBLIC_DRAGONBALL_URL as string,
    timeout: 10000
}) 

export const api2: AxiosInstance = axios.create({
    baseURL: process.env.BUN_PUBLIC_AUTH_URL as string,
    timeout: 10000
}) 