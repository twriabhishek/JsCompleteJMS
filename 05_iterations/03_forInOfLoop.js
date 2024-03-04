//for-of loop

//On array
let arr=[12,34,54,67,87,98,90,23,15];
for (const i of arr) {
    console.log(i);
}

//On string
let name="Hello World!"
for (const char of name) {
    console.log(char);
}

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map=new Map();
map.set(1, "January");
map.set(2, "Febuary");
map.set(3, "March");

for (const [key, value] of map) {
    console.log(key, value);
}

    