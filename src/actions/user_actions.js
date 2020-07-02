import axios from 'axios';
import { LOGIN_USER, REGISTER_USER } from './types';

const USER_SERVER = 'http://localhost:8888';

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/signup`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
