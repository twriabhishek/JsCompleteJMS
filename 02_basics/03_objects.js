//constructor ko call karkey jab bhi object banatey hai then always singleton object banata hai. :-Object.create()
//Lekin Jab hum object literals ki tarah banatey hai then singleton nahi banta hai. :- jsUser={}

//object m values {key:value} k format m store hoti hai jisme key always string hoti hai tum chahey usko string banao ya na banao.

//Agar humko symbol use karna hai then hum [] square bracket use kartey hai.

const mySym=Symbol("Key1");
const details={
    f_name:"Abhishek",
    l_name:"Tiwari",
    age:24,
    location:"Lucknow",
    "email":"test@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Sunday", "Tuesday"],
    [mySym]:"myKey1",
}

//two days to access a property of object
console.log(details.location);
console.log(details["location"]);
console.log(details.email);
console.log(details["email"]);
console.log(details[mySym]);

// Object.freeze(details); :- freeze object means iskey baad koi change nahi karr sakta hai.

details.greet=function(){
    console.log("Hello I am here!!");
}
console.log(details);

details.greet1=function(){
    console.log(`Welcome user ${this.f_name} ${this.l_name} `);
}
console.log(details.greet1());

console.log(details);