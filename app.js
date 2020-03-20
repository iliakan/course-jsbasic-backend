const Application = require('koa');
const config = require('./config');

const app = new Application({
  publicRoot: config.publicRoot,
});

app.use(require('koa-static')(config.publicRoot));
app.use(require('koa-bodyparser')());
app.use(require('@koa/cors')({maxAge: 86400}));

module.exports = app;
