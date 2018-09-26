import request from 'request-promise-native';

const BASE_URL = 'https://devdocs.io';
const DOCS_BASE_URL = 'https://docs.devdocs.io';

export const getAvailableDocs = () =>
  request(`${BASE_URL}/docs/docs.json`).then(JSON.parse);

export const getDocsForSlug = slug =>
  request(`${DOCS_BASE_URL}/${slug}/db.json`).then(JSON.parse);

export const getIndexForSlug = slug =>
  request(`${DOCS_BASE_URL}/${slug}/index.json`).then(JSON.parse);

export const getMetadataForSlug = slug =>
  request(`${DOCS_BASE_URL}/${slug}/meta.json`).then(JSON.parse);
