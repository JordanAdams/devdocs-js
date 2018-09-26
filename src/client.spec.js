import nock from 'nock';
import fixtures from './__fixtures__';
import { getAvailableDocs, getDocsForSlug } from './client';

it('should get available documentation', () => {
  nock('https://devdocs.io')
    .get('/docs/docs.json')
    .reply(200, fixtures['/docs/docs.json']);

  const expected = [
    {
      name: 'Angular',
      slug: 'angular',
      type: 'angular',
      links: {
        home: 'https://angular.io/',
        code: 'https://github.com/angular/angular'
      },
      version: '',
      release: '6.0.4',
      mtime: 1528681713,
      db_size: 10106727
    },
    {
      name: 'React',
      slug: 'react',
      type: 'simple',
      links: {
        home: 'https://reactjs.org/',
        code: 'https://github.com/facebook/react'
      },
      release: '16.4.0',
      mtime: 1528679925,
      db_size: 828139
    }
  ];

  return getAvailableDocs().then(docs => {
    expect(docs).toEqual(expected);
  });
});

it('should get documentation for a slug', () => {
  nock('https://docs.devdocs.io')
    .get('/foo/db.json')
    .reply(200, fixtures['/foo/db.json']);

  return getDocsForSlug('foo').then(docs => {
    expect(docs).toEqual({
      index: 'This is some documentation for foo.js',
      'what/it/does': "It doesn't do anything. This is just a mock"
    });
  });
});
