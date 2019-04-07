
const path = require('path'),
fs = require('fs');


module.exports = function (dir, ext, callback) { 

    const extension ='.'+ext
    filteredFiles=[]
    fs.readdir(dir, (err,files)=>{
        if(err){
            return callback(err,null)
        }
        
        for(file of files){
            if(path.extname(file) === extension){
                filteredFiles.push(file)
            }
        }
        callback(null, filteredFiles)
    })

 }  
