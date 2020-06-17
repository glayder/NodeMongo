

/* eslint-disable no-undef */
import { getToken } from '../../util/AuthService';

const token = getToken();

async function updateUser(data) {
  const response = await fetch(`/user${data.id}`, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
    method: 'PUT',
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

export default updateUser;
