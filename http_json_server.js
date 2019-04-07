const url = require('url')
const http = require('http')
var strftime = require('strftime')

if (process.argv.length !== 3) {
    console.error('Expected <port>');
    process.exit(1);
  }

const port = process.argv[2]


var server = http.createServer()
server.on('request', handle_request);
server.listen(port)

function handle_request(req,res){
    req.parsed_url = url.parse(req.url, true)  

    if(req.parsed_url.pathname === '/api/parsetime'){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        let iso = req.parsed_url.query.iso 
        const date = new Date(iso)
        res.end(JSON.stringify( {  
            "hour": date.getHours(),  
            "minute": date.getMinutes(),  
            "second": date.getSeconds()  
          }  
     ))
    }else if(req.parsed_url.pathname === '/api/unixtime'){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        let iso = req.parsed_url.query.iso
        const date = new Date(iso)

        res.end(JSON.stringify( {  
            "unixtime": date.getTime()  
          }))  
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' })        
        res.end(JSON.stringify({code: "url_not_found",message: "Url not found"}))
    }

}
  

