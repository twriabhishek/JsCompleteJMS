// IIFE:- Immediately Invoked function Expression
//wo function jo immedialely invoke ho jatey hai wo IIFE function hotey hai.
//IIFE ka use global variable ke polution s bachney ke liye kiya jata hai.
//()() :- Yeh ek IIFE statement hai.

(function alpha(){
    //named IIFE
    console.log("I am a IIFE in normal function");
})()

const beta=(function(){
    console.log("I am a IIFE in variable function");
})()

const gama=(()=>{
    console.log("I am a IIFE in arrow function");
})();

((name)=>{
    //unnamed IIFE
    console.log(`I am a IIFE in fat arrow function and my name is ${name}`);
})("JMS")