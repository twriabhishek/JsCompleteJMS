#Do javascript really have classes?

In JavaScript, there are no traditional classes like in languages such as Java or Python. However, JavaScript introduced the concept of classes in ECMAScript 6 (ES6) which provides a syntax similar to class-based languages for creating objects and dealing with inheritance.

Here's an example of how classes are defined and used in JavaScript ES6:
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.


However, under the hood, JavaScript's classes are essentially just syntactic sugar over JavaScript's existing prototype-based inheritance model. When you define a class in JavaScript, it creates a constructor function and adds methods to its prototype property. So, while JavaScript has a class syntax, it still operates using prototypes behind the scenes.





#What is OOPs?
OOPs is nothing but its a programming paradigm.





#What is Object?
collection of properties(variable) and method(function).



#Parts of OPPs?
Object Literals


-Constructor function
-Prototypes
-Classes
-Instances(new, this)



#Four Pillers of OPPs?
1 Abstraction(Means Details hide kar lena)
2 Encapsulation(Means data ko wrap kar diya)
3 Inheritance(means ancetors s property lena)
4 Polymorphism(means ek method bhut s form m hona)