const { write } = require('fs')
const http=require('http')

const server=http.createServer((req,res)=>
{
console.log(req)
    res,write('welcome to our homepage')
    if(req.ulr===" /operaror")
    {
res.end('this is our first history')
    }
    res.end()
})
server.listen(3000)