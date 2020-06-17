

import decode from 'jwt-decode';

/* eslint-disable no-undef */
function setToken(idToken) {
  localStorage.setItem('id_token', idToken);
  window.location.pathname = '/dashboard';
}

function setUser(user) {
  localStorage.setItem('id_user', JSON.stringify(user));
}

async function post(url, data) {
  const response = await fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json',
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

export async function login(email, password) {
  const { user } = await post('/auth/authenticate', { email, password });
  if (!userToken) {
    throw new Error('User not found');
  }
  console.log('user', user)
  const userToSave = {
    name: user.firstName,
    email: user.email,
    institution: user.institution,
    profileType: user.profileType,
  };
  setToken(userToken);
  setUser(userToSave);
  return userToken;
}

export function getToken() {
  return localStorage.getItem('id_token');
}

function getUser() {
  return JSON.parse(localStorage.getItem('id_user'));
}

function isTokenExpired(token) {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
}

export function loggedIn() {
  const token = getToken();
  const user = getUser();
  return {
    token: !!token && !isTokenExpired(token),
    user,
  };
}

export function logout() {
  localStorage.removeItem('id_token');
  localStorage.removeItem('id_user');
  window.location.pathname = '/';
}

export function getProfile() {
  return decode(getToken());
}
