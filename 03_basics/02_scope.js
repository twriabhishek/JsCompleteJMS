//let var const
//var ka scope global hota hai mostly developers not prefer to use var


//Here a, b are global variable means iska scope global hota hai. lekin if ke andar jo a, b hai unka scope sirf usi if block m hai.
let a=10;
const b=20;

if (true) {
    let a=100;
    const b=200
    console.log("Inner: ",a, b);
}

console.log("Globally: ", a, b);

//browser m scope alagg hota hai wahi node m scope alag hota hai.

function one(){
    const username="JMS";
    function two(){
        const website="Youtube";
        console.log(username);
    }
    two();
}

one();

//chotey bhai badey bhai s icecream l saktey hai magar badey bhai chotey bhai s icecream nahi le saktey.Yahi best way hai yeh samjhney ka ki nested scoping kya hoti hai.
//two() chota bhai hai wo one() jo ki bada bhai hai uski kisi bhi value ko access kar sakta hai lekin one() aisa nahi kar sakta.


//function as a var and normally
//Jab hum function ko as a variable declaire kartey hai t usko function ko declair karne ke badd hi call karr saktey hai pahley karenge then error aayegi.


function test1(){
    return("Hello I am in test1")
}
console.log(test1());

console.log(test2());
const test2=function(){
    return("Hello I am in test2")
}

