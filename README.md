# devdocs-client

A JavaScript client for the [devdocs.io](https://devdocs.io) JSON API.

## Installation

```bash
$ npm install devdocs-client
```

## Usage

```js
const devdocs = require('devdocs-client');

devdocs.getAvailableDocs()
  .then(docs => console.log(docs));
```

## Endpoints

### Available Docs

Lists available documentation.

`GET https://devdocs.io/docs/docs.json`

```js
getAvailableDocs()
  .then(docs => console.log(docs))
```

```js
[
  {
    name: 'JavaScript',
    slug: 'javascript',
    type: 'mdn',
    mtime: 1534718903,
    db_size: 5793848
  },
  ...
]
```

### Slug Metadata

Gets metadata for a slug.

`GET https://docs.devdocs.io/{slug}/meta.json`

```js
getMetadataForSlug()
  .then(metadata => console.log(metadata))
```

```js
{
  name: 'JavaScript',
  slug: 'javascript',
  type: 'mdn',
  mtime: 1534718903,
  db_size: 5793848
}
```

### Slug Index

Gets entries and types for a slug.

`GET https://docs.devdocs.io/{slug}/index.json`

```js
getIndexForSlug()
  .then(index => console.log(index))
```

```js
{
  entries: [
    {
      name: '!',
      path: 'operators/logical_operators#Logical_NOT',
      type: 'Operators'
    },
    ...
  ],
  types: [
    {
      name: 'Array',
      count: 40,
      slug: 'array'
    },
    ...
  ]
}
```

### Slug Docs

Gets documentation for a slug.

`GET https://docs.devdocs.io/{slug}/db.json`

```js
getDocsForSlug()
  .then(docs => console.log(docs))
```

```js
{
  'statements/const': '<h1>const</h1> Constants are block-scoped, much like...',
  ...
}
```

## Contributing

See: [CONTRIBUTING.md](CONTRIBUTING.md)

## License (ISC)
In case you never heard about the ISC license it is functionally equivalent to the MIT license.

See: [LICENCE.md](LICENSE.md)
