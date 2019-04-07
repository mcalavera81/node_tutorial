const http = require('http')

const url = process.argv[2]

let output=''
http.get(url, (response)=>
{
    response.setEncoding('utf8')
    response.on("data", data=>{
        output +=data    
    })
    response.on("error", console.error)
    response.on("end", ()=>{
        console.log(output.length)
        console.log(output)

    })  
  


}).on("error", console.error)