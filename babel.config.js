module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    plugins: [],
    presets: [['@babel/env', { modules: 'commonjs' }]]
  };
};
