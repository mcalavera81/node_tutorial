const http = require('http')
const async = require('async')


const urls= process.argv.slice(2)
const tasks = urls.map(task)

async.parallel(tasks,
(err, results)=>{
    for(r of results){
        console.log(r)
    }
}
);

function task(url){
    return (callback)=>{
        http.get(url, (response)=>
        {
            let output=''

            response.setEncoding('utf8')
            response.on("data", data=>{
                output +=data    
            })
            response.on("error", err => callback(err,null))
            response.on("end", ()=>{
                callback(null,output);
            }) 
        
        
        
        }).on("error", err => callback(err,null))
    }
}



