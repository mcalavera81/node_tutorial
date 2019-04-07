var http = require('http')

var map = require('through2-map') 
var server = http.createServer()

const port = process.argv[2]

server.on('request', (req,res)=>{
    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

    req.pipe(map(function (chunk) {  
      return chunk.toString('utf8').toUpperCase()  
    })).pipe(res)  
   
});

server.listen(port)  

 
//inStream.pipe(map(function (chunk) {  
//  return chunk.toString().split('').reverse().join('')  
//})).pipe(outStream)  