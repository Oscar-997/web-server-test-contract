const dataRouter = require('./tokenData')

function route(app) {
  
  app.use('/', dataRouter);
}

module.exports = route