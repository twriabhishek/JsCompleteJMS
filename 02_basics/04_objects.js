let details=new Object();
console.log(typeof details);

details={
    fullName:{
        f_name:"Abhishek",
        l_name:"Tiwari",
    },
    Age:24,
    location:"Lucknow",
}

console.log(details);
console.log(details.fullName);
console.log(details.fullName.f_name);
console.log(details.fullName.l_name);


const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d",
}
const obj4={
    5:"c",
    6:"d",
}

const obj3={...obj1, ...obj2, ...obj4};
console.log(obj3);

//jab hamarey pass 2 ya 2 se jyada object ho aur unko ek object m daalna ho then hum spread operator ka use karkey aisa karr saktey hai.

//Object.hasOwnProperty():- iss method ki help s hum pta laga saktey hai ki property keys k form object  m hai bhi.


console.log(details.hasOwnProperty('location'));