import axios from 'axios';
import { BASE_URL } from 'constants/constants';

const httpClient = axios.create({
  baseURL: BASE_URL
});

const requestHandler = async (request) => {
  if (request && request.headers) {
    request.baseURL = BASE_URL;
    request.headers.Referer = BASE_URL;
    request.headers.Origin = BASE_URL;
  }
  return request;
};

const responseHandler = (response) => {
  if (response && response.status === 401) {
    localStorage.clear();
  }
  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

httpClient.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

httpClient.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

export default httpClient;
