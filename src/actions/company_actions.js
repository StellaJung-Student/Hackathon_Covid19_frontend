import axios from 'axios';
import { GET_COMPANY } from './types';

const USER_SERVER = 'http://localhost:8888';

export function getCompanies() {
  const request = axios
    .get(`${USER_SERVER}/companies`)
    .then((response) => response.data);

  return {
    type: GET_COMPANY,
    payload: request,
  };
}
