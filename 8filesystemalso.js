const {readFile,writeFile}=require('fs')
console.log('start')
readFile('./controller/subfolder/first.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log(err)
        return
    }
    const first=result;
    readFile('./controller/subfolder/second.txt','utf8',(err,result)=>
    {
        if(err)
        {
            console.log(err)
            return
        }
        const second=result;
    
    writeFile('./controller/subfolder/result.txt',`here is the result: ${first},${second}`,(err,result)=>
    {
        if(err)
        {
            console.log(err)
            return
        }
        
        console.log(result)
        console.log('done with this task')
    })
})
})
console.log('starting next task')
