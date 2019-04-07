
//console.log(process.argv)

let numbers = process.argv.slice(2)
let sum = 0
for(i of numbers){
  sum += parseInt(i)
}
console.log(sum)
