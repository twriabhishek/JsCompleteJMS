let color=["red", "blue", "orange"];
let anime=["dog", "cat", "rat"];
let veggies=["potato", 'tomato', 'onion']

// color.push(anime);
// console.log(color[3][0]);

let newArray=color.concat(anime);
console.log(newArray);


//push method existing array m hi push karta hai complete array ko as a single element but
//concat new array return karta hai usmey dono array ke element add karr deta hai.

//using spread operator:- concat two or more array

//.flat(depth) :- flattan the array from any depth

//Array.isArray():- return true or false if array then retrun true otherwise false
//Array.from()/Array.of():- Convert in array


let duplicate=[...anime, ...color, ...veggies];
console.log(duplicate);

let number= [1,2,3,[44,55,66],7,8,[99,88,77,[21,45,78]]];
console.log(number.flat(Infinity));

