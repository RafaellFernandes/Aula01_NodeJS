const http=require('http');

const server=http.createServer((req,res)=>{
//200 - pagina ativa
//400 - pagina nao encontrada
//500 - nao conseguiu fazer conexao segura ou uma conexao em si
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h1> roi pessoas </h1>");
    res.end();
});
server.listen(5000,()=>{
    console.log('Servidor Online')
});