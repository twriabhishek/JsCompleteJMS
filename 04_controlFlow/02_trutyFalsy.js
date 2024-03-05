//falsy values:
// false, 0, -0, 0n(Bigint), "", undefined, null, NaN
//Truty value: upar ke alawa jo bhi bacha hai sab kuch truthy hai.
//"0", "false", " ", [], {}, function(){},.........etc

let arr=[];
if(arr.length===0){
    console.log("Aray is Empty");
}
else{
    console.log("Array is Not Empty");
}


const obj1={};
//Object.keys(obj1) :- Make array of keys

if(Object.keys(obj1).length===0){
    console.log("Object is Empty");
}
else{
    console.log("Object is Not Empty");
}


// false==0
// false==''
// 0==''
//Yeh sabhi true evaluate hoti hai.

console.log(false==0);
console.log(false=='');
console.log(0=='');


// false===0
// false===''
// 0===''
//Yeh sabhi false evaluate hoti hai.


//Nullish coalescing operator(??):- handle karata hai null and undefined value ko
let val1=12 ?? 20;
console.log(val1);

let val2=null ?? 23;
console.log(val2);

let val3=undefined ?? 200;
console.log(val3);

let val4=null ?? 23 ?? 90;
console.log(val4);



//condition?True:false
4==4?console.log("true"):console.log("false");
