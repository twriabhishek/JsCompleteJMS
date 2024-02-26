let weight=80;
let height=new Number(7);

console.log(weight, height);

//toString
//toFixed
//toPrecision
//toLocaleString

let numb1=89.65787;
console.log(typeof(numb1.toString()));
console.log(numb1.toPrecision(2));

let numb2=10000000000000;
console.log(numb2.toLocaleString("en-US"));
console.log(numb2.toLocaleString("en-IN"));


console.log(Number.MAX_VALUE, Number.MIN_VALUE,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
//JS m Number itself bahut si properties rakta hai:
//max-value, min-value, max-safe-interger, min-safe-integer



//******************************Maths************************************** */
//abs -> remove negative sign from number
//round
//pow
//ciel
//floor
//sqrt
//min
//max
//random()


console.log(Math.abs(-980));

console.log(Math.round(98.454));

console.log(Math.sqrt(89));

console.log(Math.pow(2,10));

console.log(Math.round((Math.random()*10)+1)-1);

console.log(Math.max(2,5,6,7,10,98));

console.log(Math.min(2,5,-0,+0,0,10,98));

console.log(Math.floor((Math.random()*10)+1));

//Generate a number between 10 to 20
function genratebetween(mini, maxi){
    return Math.floor((Math.random()*(maxi-mini+1))+mini);
}

console.log("Number is:", genratebetween(20,80));






