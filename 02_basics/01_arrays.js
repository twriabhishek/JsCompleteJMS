//Array ka size mutable hota hai.
//Array m different datatypes k element rakhey ja saktey hai.
//zero based indexing.
//When Copy one array into another then its always make shallow copy.
//Array object m prototype ke andar ek aur prototype hota hai.


let supercop=["shaktiman", "naagraj", "juniorji"];
let supercop1=new Array("shaktiman", "naagraj", "juniorji");

console.log(supercop1);


supercop.push("Spiderman");
console.log(supercop);

supercop.pop();
console.log(supercop);

supercop.unshift("axaxx")
console.log(supercop);

console.log(supercop.includes("naagraj"));

//Methods in arrray
//push()
//.pop()
//.unshift()
//.include()
//.indexof()
//.join() ==>convert in string
//.slice(st, en) => ending index not consider
//.splice()

//slice vs splice
//slice ki help s ek portion ko nikaal letey hai lekin meri array change nahi hoti hai but agar hum splice ka use kartey hai then original array splice ho jati hai.
//slice original array ko manupulate nahi karta hai but splice original array ko manupulate karta hai.


let myArray=[31,52,63,34,25,16,25];
let newArray=myArray.join();
console.log(myArray, newArray);

console.log("A", myArray);
console.log(myArray.slice(1,4));
console.log("B", myArray);


console.log("A", myArray);
console.log(myArray.splice(1,4));
console.log("B", myArray);