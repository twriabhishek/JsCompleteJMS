//1)Math.PI ki value constant hoti hai agar hum isko overwrite karr bhi detey hai then yeh overwrite nahi hoti hai.
//2)Object ki bahut si properties hoti hai usmey se ek hoti getOwnPropertyDescriptor(module, key). Iski help se
//hum module ke particular key ki value ka complete description le saktey hai.

let description=Object.getOwnPropertyDescriptor(Math, "PI");
console.log(description);
// Output:{
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

//3)PI ki writable, enumerable, configurable all properties set to false so that hum iss constant ki value change nahi karr saktey.


const chai={
    name:"Marvel",
    price:300,
    isAvailable:true
}

chai.name="Ninjas"

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
// Output:{
//     value: 'Marvel',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

//4) PI ki getOwnPropertyDescriptor Property na hi writable hai, na hi enumerable hai, na hi configurable hai but
//chai ki getOwnPropertyDescriptor Property writable bhi hai, enumerable bhi hai, configurable bhi hai.

//5)JS sabhi object ki properties ko change nahi karney detaa hai lekin jo object hum define kartey hai
//unko hum customize karrr saktey hai.


Object.defineProperty(chai, 'name', {
    writable:false,
    enumerable: false,
    configurable: false
});

chai.name='spider';
console.log(Object.getOwnPropertyDescriptor(chai, 'name')); 



Object.defineProperty(Math, 'PI', {
    writable:true,
    enumerable: true,
    configurable: true
});

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));