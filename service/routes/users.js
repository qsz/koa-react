var router = require('koa-router')();

router.get('/', function *(next) {
  console.log(this.response.header);
  this.response.body = {
    'd':'dd'
  };
});

module.exports = router;
