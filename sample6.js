// setting up server using http req and res

const http = require ('http');

const server = http.createServer((req,res)=>{
    res.write('welcome');
    res.end();
})
server.listen(5000);