const path = require('path'),
        fs = require('fs');

const dir=process.argv[2]
const extension ='.'+process.argv[3]
fs.readdir(dir, (err,files)=>{
    if(err){
        return console.log(err)
    }

    
    for(file of files){
        if(path.extname(file) === extension){
            console.log(file)
        }
        
    }

})