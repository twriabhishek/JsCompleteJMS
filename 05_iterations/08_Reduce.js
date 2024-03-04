const nums=[1,2,3,4,5];


//normal function
const totalNums=nums.reduce(function(acc, item){
    console.log(`Accumulator ${acc}, Item ${item}`);
    return (acc+item);
}, 0);

console.log(totalNums);


//Fat arrow function
//const sumofArray=nums.reduce((acc, curr)=>(acc+curr), initial);

const sumNums=nums.reduce((acc, item)=>{
    console.log(`Accumulator ${acc}, Item ${item}`);
    return (acc+item);
}, 0);