//this keyword current context m use hota hai.

const user={
    name:"Abhishek",
    price:"$100",
    greet: function(){
        return(`Welcome, ${this.name} you selected an item whose price is ${this.price}`)
    }
}

console.log(user.greet());
user.name="Ashish";
console.log(user.greet());

//Browser m global context window hota hai wahi node/deno/bun m global context blank object{} hota hai.
console.log(this);

function test3(){
    let name="Vivek";
    console.log(this.name);
}
test3();

//this context ka use only object m hota hai agar hum function m use karenge then wo undefined dega.

const test4=()=>{
    let name="flloyd";
    console.log(this.name);
}
test4();

//function chahey jiss bhi type ka ho arrow function, var function or old function sabhi m (this.variable) undefined rahega.
//arrow function m hum this use nahi karr saktey hai.


//arrow function

// ()=>{} Basic arrow function syntax
//agar 1 line hogi then hum implicit return karwa saktey hai means bina return likhey.
//agar curly braces{} use hua then return statement likhna hoga means explicitily return hoga, agar small braces() use hua then return likhney ki no need means implicitily return.


const test5=(a,b)=>{
    return a+b;
}
const test6=(a,b) => a+b; //implicit return means bina return likhey return ho raha hai.

console.log(test5(10,10));
console.log(test6(20,30));

function test7(){
    let name="JMS";
    console.log(this);
}
test7();


const objReturn=()=>{
    const details={
        f_name:"Abhishek",
        l_name:"Tiwari",
        age:24,
        location:"Lucknow",
        email:"test@gmail.com",
        isLoggedIn:false,
        lastLoginDay:["Monday","Sunday", "Tuesday"],
    }
    return (details);
}

console.log(objReturn());

