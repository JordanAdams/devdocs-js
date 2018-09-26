import docsDB from './docs/docs';
import fooIndex from './foo';
import fooDB from './foo/db';
import fooMeta from './foo/meta';

export default {
  '/docs/docs.json': docsDB,
  '/foo/index.json': fooIndex,
  '/foo/db.json': fooDB,
  '/foo/meta.json': fooMeta
};
