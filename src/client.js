import request from 'request-promise-native';

const BASE_URL = 'https://devdocs.io';
const DOCS_BASE_URL = 'https://docs.devdocs.io';

export const getAvailableDocs = () =>
  request(`${BASE_URL}/docs/docs.json`, { json: true });

export const getDocsForSlug = slug =>
  request(`${DOCS_BASE_URL}/${slug}/db.json`, { json: true });
