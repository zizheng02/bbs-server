const Koa = require('koa')

const app = new Koa()

app.use((ctx,next)=>{
    ctx.body='hello api'
})

app.listen(4000,()=>{
    console.log('server is running on http://localhost:4000')
})