const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>INDEX SAYFASI</h1>'
})

router.get('/iletisim' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>İletisim sayfası</h1>'
})

router.get('/hakkimda' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Hakkimda sayfası</h1>'
})

app.use(router.routes())

const port = 3000


app.listen(port,() =>{
    console.log(`Sayfa ${port} unda çalıştırıldı`)
})