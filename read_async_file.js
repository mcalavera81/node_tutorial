const fs = require('fs') 
const buffer= fs.readFile(process.argv[2],'utf8',(err,dataStr)=>{
    if(err) {
        return console.log(err)
    }    
     
    console.log(dataStr.split('\n').length-1)

});


