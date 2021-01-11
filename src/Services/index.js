const axios = require('axios').default;
const {REST_BASE_URL} = require('../Configs/env');

const Service = axios.create({
  baseURL: REST_BASE_URL,
  timeout: 5000,
});

export const SIGN_IN = async ({first_name, last_name, email, age}) =>
  Service('/sign_in', {
    method: 'POST',
    data: {
      first_name: first_name,
      last_name: last_name,
      email: email,
      age: age,
    },
  });

export const GET_BOOKS = async () => Service('/books');

export const GET_BOOKS_BY_SEARCH = async ({search}) =>
  Service(`/books?q=${search}`);

export const GET_BOOKS_BY_GENRE = async ({genre}) =>
  Service(`/books?genre=${genre}`);
