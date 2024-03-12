//Execution Context, Call stack
//Execution Context three types k hotey hai:- Global execution context, functional execution context, eval context(part of Global execution context)

//Js execution context:- Means JS file hamarey browser m kaisey run hoti hai.

//Js files two phase m run hoti hai: Memory Creation phase, Execution phase

let val1=10;
let val2=20;

function addNumber(num1, num2){
    let total=num1+num2;
    return total;
}

let result1=addNumber(val1, val2);
let result2=addNumber(10,20);

//First(Creation of global context):- complete js ka code global execution context m define hota hai means this m.
//Second(Memory creation phase):- uskey baad memory creation phase aata hai ismey sabhi variable create hotey hai but unki value
//undefined initialize hoti hai and sabhi function bhi apni definition k sath space letey hai.
//Third(Execution phase):- sabhi variable m values assign hoti hai aur complete code execute hota hai agar kahi function call
//hai then uskey liye phir s memory creation phase or execution phase execute hota and final result global execution
//context ko return hota hai.
