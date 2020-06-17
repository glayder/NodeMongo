

/* eslint-disable no-undef */
import { getToken } from '../../util/AuthService';

const token = getToken();

async function removeUser(data) {
  const response = await fetch(`/user${data.id}`, { 
    method: 'DELETE',
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
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

export default removeUser;
