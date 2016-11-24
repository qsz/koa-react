var Router = require('koa-router');

var router = new Router();

router.get('*', function *(ctx, next) {
  yield this.render('index', {

  });
})



module.exports = router;
