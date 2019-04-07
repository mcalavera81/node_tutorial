const filteredls = require('./module')

filteredls(process.argv[2],process.argv[3],(err,data)=>{

    if(err){
        return console.log(err)
    }
    for(file of data){
        console.log(file)
    }

})