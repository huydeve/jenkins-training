const app = require('./app');

/* istanbul ignore next resdf*/
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
