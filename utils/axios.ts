import axios, { CreateAxiosDefaults } from 'axios';

const defaultOptions: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    common: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
};

const httpClient = axios.create(defaultOptions);

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default httpClient;
