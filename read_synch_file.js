const fs = require('fs') 
const buffer= fs.readFileSync(process.argv[2])
const output = buffer.toString('utf8')
const lines = output.split('\n')

console.log(lines.length-1)