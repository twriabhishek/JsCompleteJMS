let names="rohit";
let age=24;
let isEducated=true;
let isMarried=null;
let isFather
let isHouse="";

console.table([names, age, isEducated, isFather, isMarried, isHouse]);

//String
//boolean
//number
//null=> standalone value
//undefined=> means abhi value defined nahi hui hai
//symbol=> unique
//object

//jab hum kisi variable m koi value nahi assign kartey hai to wo variable undefined hota hai iska means humne abhi uss variable me koi value assign nahi ki hai.
//Jab hum kisi variable ko null assign kartey hai t uska means hum usko khali rakh rahey hai.

//null vs undefined vs "" yeh teeno differ hai.



console.table([typeof(names), typeof(age), typeof(isEducated), typeof(isFather), typeof(isMarried), typeof(isHouse)]);

//agar hum datatype check karna chatey hai then humko typeof() function use karna padega.
//Null ka datatype object aata hai magar undefined ka datatype undefined hi hota hai.






//[Summary of datatypes]
//Values memories m kaise store hoti hai aur kaise access hoti hai isi basis pparr datatypes are 2 types:

//Primitive(wo datatypes hotey hai jiski value ko jab hum doosrey variable m assign kartey t value copy hoti hai)
//Non-primitive(wo datatypes hotey hai jiski value ko jab hum doosrey variable m assign kartey t reference copy hoti hai)


//Primitive/Call type(string, number, boolean, null, undefined, bigint, Symbol)
//Non-Primitive/Reference type(array, object, function)