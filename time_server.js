var net = require('net')  
var strftime = require('strftime') // not required in browsers

var port = process.argv[2]
var server = net.createServer(
    function (socket) {  
        //"YYYY-MM-DD hh:mm" 
       // socket handling logic
       socket.write(strftime('%Y-%m-%d %H:%M')+"\n")
       socket.end()
})  

server.listen(port) 
