import axios from 'axios';

const API_BASE_URL = 'https://637281b644867de75d5e5394.demo.shoppress.pl/api/';

export const ENDPOINTS = {
    products: 'products'
};

export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000
});