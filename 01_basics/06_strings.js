let name="Abhishek"
let repos="89"

console.log(`My Name is ${name} and my git repos count is ${repos}`);//String interpolation

let alpha="asdfghjkloiuytrewqzxcvbnm";
const alpha1 = new String("Tiwari");
console.log(alpha, alpha1);

console.log(alpha1[0],alpha1[1],alpha1[2],alpha1[3],alpha1[4],alpha1[5]);
console.log(alpha1.__proto__);

//String Methods
//length
//toUpperCase()
//toLowerCase()
//charAt()
//indexOf()
//substring(start, end)
//slice()
//trim() //trimStart() //trimEnd()
//replace()
//include()
//split()
//padstart()
//padend()


console.log("*****************************************************************************");
let prac="Sonam";
console.log(prac.length);
console.log(prac.toLowerCase());
console.log(prac.toUpperCase());
console.log(prac.charAt(3));
console.log(prac.indexOf('a'));
console.log(prac.substring(1,-4));
console.log(prac.slice(1,4));
//The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still returned. The slice() method returns an empty string if this is.


const greeting = '   Hello world!   ';
console.log(greeting.trim());


let email="abhishek@gmail.com";
console.log(email.replace('gmail', 'yopmail'));
console.log(email.includes('@'));
console.log(email.split('@'));


const fullNumber = '2034399002125581';
const start4=fullNumber.slice(-4);
const mocknumber=start4.padStart(fullNumber.length, '*');
console.log(mocknumber); 
