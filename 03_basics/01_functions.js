//function
//function definition m jo value aati hai usko parametre kahtey hai function ko call karatey samay jo value bhejtey hai usko argument kahtey hai


function addTwoNumber(num1, num2){
    return(num1+num2);
}
console.log(addTwoNumber(6, 7));


function sayLoginUser(username="Hi"){
    return(`${username} just Logged In`);
}
console.log(sayLoginUser("abhishek"));



//Agar hum function call kartey samay bahut sarey argument pass karey aor humko nahi pta ki aur kitne argument pass honge tab hum function definition m as aparameter rest operator(...) use karr letey hai.

function addToCart(num1, num2, ...para){
    return para;
}
console.log(addToCart(80, 90, 54, 32, 17));

const details={
    name:"Abhishek",
    age:32
}

function Infodetails({name="Doe", age=25}){
    return (`Your name is ${name} and your age is ${age}`);
}
console.log(Infodetails(details));


function addArray(arr){
    return(arr)
}

const arrr=[8,6,3,2,9]
console.log(addArray(arrr));

