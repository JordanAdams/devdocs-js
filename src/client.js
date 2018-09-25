import request from 'request-promise-native';
import uniq from 'lodash.uniq';

const BASE_URL = 'https://devdocs.io';
// const DOCS_BASE_URL = 'https://docs.devdocs.io';

export const getAvailableDocs = () =>
  request(`${BASE_URL}/docs/docs.json`, { json: true });

export const getAvailableTypes = () =>
  getAvailableDocs()
    .then(docs => docs.map(({ type }) => type))
    .then(uniq);

export const getSlugsForType = type =>
  getAvailableDocs()
    .then(docs => docs.filter(doc => doc.type === type))
    .then(docs => docs.map(({ slug }) => slug));
