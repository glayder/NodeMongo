

/* eslint-disable no-undef */
import { getToken } from '../../util/AuthService';

const token = getToken();

async function createUser(data) {
  const response = await fetch('/user', {
    body: JSON.stringify(data),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();
  if (json.error) {
    throw new Error(json.error);
  }
  return json;
}

export default createUser;
