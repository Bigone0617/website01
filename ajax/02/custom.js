var https = require('http');

https.createServer(function(require, response){
    response.writeHead(200,{'conent-type':'text/html'});
    response.write('hello world!!');
    response.end();
}).listen(8889);

console.log('server running at http://localhost:8889');