const http = require ('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end("welcome to home page");
    }
    if(req.url =='/about'){
        res.end("welcome to about page");
    }
    if(req.url=='/info'){
        res.end("welcome to info page")
    }
})
server.listen(9640);
