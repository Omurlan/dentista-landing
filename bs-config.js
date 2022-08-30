module.exports = {
  proxy: 'localhost:8000',
  files: ['public/**/*', 'views/**/*'],
  ignore: ['node_modules'],
  reloadDelay: 10,
  ui: false,
  notify: false,
  port: 3000,
};
