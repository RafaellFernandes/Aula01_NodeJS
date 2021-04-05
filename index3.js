const http=require('http');
//fs - file system
const fs=require('fs');

const server=http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});

    if(req.url==='/'){
        res.end(fs.readFileSync('./views/index.html'));
    }else if (req.url==='/sobre') {
        res.end(fs.readFileSync('./views/sobre.html'));
    }else{
        res.writeHead(400,{'Content-type':'text/html'});
        res.end(fs.readFileSync('./views/erro.html'))
    }
});
server.listen(3000,()=>{
    console.log('Servidor Online')
});