//1)Javascript ka prototypal behaviour hota hai.
//2)Javascript m har ek cheez object hai means jo property object ke pass available hai wo array, string, function ke pass bhi available hai.
//3)Javascript m function bhi ek object hai.Means function, function t hai hi lekin object bhi hai.
//4)Javascript M protypal inheritance hota hai.

function createUser(username, score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score=this.score+1;
    console.log(this.score);
}

createUser.prototype.getScore=function(){
    console.log(`Your Score is ${this.score}`);
}

let mi= new createUser("Mumbai Indian", 220);
let csk= new createUser("Chennai super King", 250);

mi.increment();
csk.increment();
mi.getScore();
csk.getScore();





//Here What happend behind the scene when the new keyword is used.

//1)A new object is created:
//2)A Prototype is linked:
//3)The constructor is called:
//4)The new object is returned:



// When the new keyword is used in JavaScript to create an instance of an object, several steps occur behind the scenes:

// Memory Allocation: First, memory is allocated for the new object.

// Prototype Linkage: The [[Prototype]] property of the newly created object is set to the prototype object of the constructor function from which the object is created. This establishes the prototype chain, allowing the object to inherit properties and methods from its constructor's prototype.

// Constructor Execution: The constructor function is called with the new object as the value of this. This allows the constructor to initialize the newly created object with properties and methods.

// Implicit Return: If the constructor function doesn't explicitly return an object, the newly created object (initialized by this) is implicitly returned. If a return value is provided, it will replace the newly created object.

// Instance Creation: Finally, the newly created object is returned from the new expression and can be assigned to a variable or used directly.
