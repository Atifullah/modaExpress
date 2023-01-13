const fs =require('fs');

function question1(){
fs.readFile('data.txt',(err,data)=>{
    const direction=data.toString();
    const directionArray=direction.split('');
    console.time('time');
    const answer= directionArray.reduce((acc,currentvalue)=>{
        if(currentvalue==='(')
        {
            return acc += 1;
        }
        else if(currentvalue===')')
        {
            return acc-=1
        }
    },0)
    console.timeEnd('time');
    console.log('floor',answer);
})
}
question1()