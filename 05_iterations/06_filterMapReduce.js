//for-each loop koi value retrun nahi karta hai.
//isi problem ko solve karne k liye map, reduce and filter seen m aatey hai.

const coding = ["js", "cpp", "python", "java", "swift"];

const items=coding.forEach((item)=>{
    console.log(item);
});
console.log(items);


const num=[1,2,3,4,5,6,7,8,9,10];
const filteredNum=num.filter((item)=>{
    return (item>6);
})
console.log(filteredNum);

//filter bhi ek call back leta hai jaise ki for-each loop leta hai.
//call back m jo item true hotey hai wo return hotey hai otherwise return nahi hota hai.
//agar hum paranthesis{} use kartey hai then humko explicitily return karwana padata hai.
//agar hum small braces() use kartey hai then implicitily return ho jata hai.



const books=[
    {
        title:"Book one",
        genre:"Science",
        publish:"1981",
        edition:2018
    },
    {
        title:"Book two",
        genre:"Fiction",
        publish:"1982",
        edition:2020
    },
    {
        title:"Book three",
        genre:"Non-fiction",
        publish:"1983",
        edition:2020
    },
    {
        title:"Book four",
        genre:"Science",
        publish:"1983",
        edition:2024
    },
    {
        title:"Book five",
        genre:"History",
        publish:"1984",
        edition:2017
    },
]

let filtereditem=books.filter((book)=>{
    return(book.edition>=2020 && book.genre==='Science');
})

console.log(filtereditem);