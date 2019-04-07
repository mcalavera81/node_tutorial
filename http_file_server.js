const fs = require('fs')
const http = require('http')

if (process.argv.length !== 4) {
    console.error('Expected <port> <filename>');
    process.exit(1);
  }

const port = process.argv[2]
const path = process.argv[3]

var server = http.createServer()

server.on('request', handle_request);


function handle_request(req,res){
    const stream = fs.createReadStream(path)
    stream.on('open', function () {
        stream.pipe(res);
    });
    
    
    stream.on('error', function(err) {
        res.end(err);
    });
}


server.listen(port)  

