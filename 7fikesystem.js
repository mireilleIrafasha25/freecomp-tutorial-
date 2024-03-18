const {readFileSync,writeFileSync}=require('fs')
//console.log('start')
const first=readFileSync('./controller/subfolder/first.txt','utf8')
const second=readFileSync('./controller/subfolder/first.txt','utf8')
console.log(first,second)
writeFileSync(
    './controller/subfolder/result_sync.txt',
    `here is the result: ${first},${second}`,
    {flag:'a'})
   // console.log('done with this task')
    //console.log('starting the next one')
