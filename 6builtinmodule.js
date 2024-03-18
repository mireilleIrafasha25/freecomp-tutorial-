const { Console } = require('console')
const os=require('os')
const path=require('path')
const user=os.userInfo()
console.log(user)
//method that returns the system uptime in seconds
const time=os.uptime()
console.log(`system is uptime is ${time} seconds`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem()

}
console.log(currentOs)
//returning path
console.log(path.sep)

const filepath=path.join('/controller/','subfolder','test.txt')
console.log(filepath)

const basename=path.basename(filepath)
console.log(basename)

const absolute=path.resolve(__dirname,'/controller/','subfolder','test.txt')
console.log(absolute)