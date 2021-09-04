const fs = require('fs')
const promisify = require('util').promisify
//这样做可以让readFile方法返回promise对象
const readFile = promisify(fs.readFile)
async function run() {
    let r1 = await readFile('1.txt', 'utf-8')
    let r2 = await readFile('2.txt', 'utf-8')
    let r3 = await readFile('3.txt', 'utf-8')
    console.log(r1)
    console.log(r2)
    console.log(r3)
}
run()