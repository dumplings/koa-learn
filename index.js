const Koa = require('koa');
const qs = require('querystring');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const port = 3000;

app.use(bodyParser());
app.use(async ctx => {
  console.log(ctx.url === ctx.request.url);
  const url = ctx.url;
  const method = ctx.method;
  if (url === '/' && method === 'GET') {
    ctx.body = `<html>
<form action="/" method="post">
<input type="text" placeholder="name" name="name">
<input type="text" placeholder="age" name="age">
<button type="submit">submit</button>
</form>
</html>`;
  } else if (method === 'POST') {
    ctx.body = ctx.request.body;
  } else {
    ctx.body = '404';
  }
});

app.listen(port);
console.log('start');
