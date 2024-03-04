//Map true/false return nahi karta hai yeh values return karta hai.
//Map m bhi ek call back hota hai.

let arr=[1,2,3,4,5,6,7,8,9,10];
let duplicate=[];

arr.forEach((item)=>{
    duplicate.push(item+10);
})
console.log(duplicate);


let mappedArray=arr.map((item)=>{
    return item+10;
});
console.log(mappedArray);

//jab hum ek se jyada method ek sath use kartey hai then usi concept ko chaining kahtey hai.

let duplicateArray=arr.map((item)=>(item*10))
                      .map((item)=>(item+2))
                      .filter((item)=>(item>=40));

console.log(duplicateArray);                      
