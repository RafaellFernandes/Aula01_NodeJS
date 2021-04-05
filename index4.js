const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    let url=req.url;
    
    switch (url) {
        case '/':
            res.end(fs.readFileSync('./views/index.html'));
            break;
        case '/sobre':
            res.end(fs.readFileSync('./views/sobre.html'));
            default:
                res.writeHead(400,{'Content-type':'text/html'});
                res.end(fs.readFileSync('./views/erro.html'));
                break;
    }
    
});

server.listen(3000,()=>{
    console.log('Servidor Online')
});