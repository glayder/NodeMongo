

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

async function getUser(id) {
  const response = await fetch(`/user${id}`, options);
  return response.json();
}

export default getUser;
