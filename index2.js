const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})

    if (req.url==='/'){
        res.write('<h2>oi</h2>');

    } else if (req.url==='/sobre') {
        res.write('<h2>sobre trenós</h2>');

    }else{
        res.writeHead(400,{'Content-type':'text/html;charset=utf-8'});
        res.write('<h1> Pàgina nao encontrada na lixeira</h1>');
    }

    res.end();
});

server.listen(3000,()=>{
    console.log('Servidor Online')
});