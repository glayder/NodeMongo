

/* eslint-disable no-undef */
import { getToken } from '../../util/AuthService';

const token = getToken();
const headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Authorization', token);

const options = {
  method: 'GET',
  headers,
};

async function getUsers() {
  const response = await fetch('user', options);
  return response.json();
}

export default getUsers;
