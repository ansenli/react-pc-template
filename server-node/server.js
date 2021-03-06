
const Router = require('koa-router')();
const path = require('path');
const static = require('koa-static');
const Koa = require('koa');
const App = new Koa();
const config = require('./config');
const mysql = require('./mysql')

/* 引入各个模块路由 */

let home = require('./routes/home');
let login = require('./routes/login');
let register = require('./routes/register');
let user = require('./routes/user');
//设置静态资源的路径 
const staticPath = '../build';
/*装载所有子路由*/
Router.use('/home',home.routes());
Router.use('/login',login.routes()); // 打包后对应的路径要修改成 /api/login
Router.use('/register',register.routes());
Router.use('/user',user.routes());
/* 加载路由中间件 */
App.use(Router.routes());

/* 配置静态服务器 */

App.use(static(path.join(__dirname,staticPath)));

App.use(async (ctx) => {
  // 连接数据库成功
  let data = await mysql.query();
  console.log("data mysql........",data);
  ctx.body = {
      "code": 1,
      "data": data,
      "mesg": 'ok'
  };
  console.log("ctx.body.....",ctx.body)
  
})

/* 启动服务绑定端口 */
let server = App.listen(config.port,()=>{
  let host = server.address().address;
  let port = server.address().port;
  console.log("[server]started http://%s:%s", host, port)
})