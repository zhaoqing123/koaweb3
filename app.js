import Koa from 'koa';
import router from 'koa-simple-router';
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
import  render from 'koa-swig';
import  co from 'co';
import  serve from 'koa-static';
import initController from './src/controller/initController';
import CONFIG from './src/config/config';
const app = new Koa();
initController.init(app,router) ;
 
 app.context.render = co.wrap(render({
  root: CONFIG.get('viewDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html'
}));//koa-swig

 app.use(serve(CONFIG.get('staticDir')));//koa-static
app.listen(CONFIG.get('port'));
export default app