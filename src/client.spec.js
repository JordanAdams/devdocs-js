import nock from 'nock';
import fixtures from './__fixtures__';
import { getAvailableDocs, getAvailableTypes, getSlugsForType } from './client';

it('should get available documentation', () => {
  nock('https://devdocs.io')
    .get('/docs/docs.json')
    .reply(200, fixtures['docs.json']);

  return getAvailableDocs().then(docs => {
    expect(docs).toEqual(JSON.parse(fixtures['docs.json']));
  });
});

it('should get a list of available types', () => {
  nock('https://devdocs.io')
    .get('/docs/docs.json')
    .reply(200, fixtures['docs.json']);

  return getAvailableTypes().then(docs => {
    expect(docs).toEqual(['angular', 'cakephp', 'codeception']);
  });
});

it('should get all slugs for a type', () => {
  nock('https://devdocs.io')
    .get('/docs/docs.json')
    .reply(200, fixtures['docs.json']);

  return getSlugsForType('angular').then(docs => {
    expect(docs).toEqual(['angular', 'angular~5', 'angular~4', 'angular~2']);
  });
});
