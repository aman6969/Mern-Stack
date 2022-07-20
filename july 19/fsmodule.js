const fs = require('fs');
fs.readFile("index.txt","utf8", (err,data)=>{
    console.log(err,data);
})
console.log("hello  world")
const a=fs.readFileSync('index.txt')
console.log(a.toString())
fs.writeFile("index2.txt","this is another file",()=>{
    console.log("Written to this file")
})