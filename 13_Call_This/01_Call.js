//1)Jab hamarey pass function ke andar ek function aur call hota hai then wo call function bhi execution context m
//load hota hai. Iss calling function ka this global execution context ko refer karata hai.
//2)Window = {this refers to window};
//3)node = {this refers to {}}



//1)Jab hum ek function s doosra function ko call karety hai then wo function jo doosrey function s call kiya gaya hai, wo global 
//context ko represent karta hai uska this window ko current context maanta hai. 
//2)Agar hum yeh chahtey hai ki jis function se mainey doosrey func ko call kiya hai doosra func pahley waley ko
//apna global context maney then hum setUser.call(this, username); s kartey hai jiissey ki doosra function finish
//honeyy par apna complete context pahley ko bhej deta hai.


function setUser(username){
    this.username=username
    console.log("called");
}

function createUser(username, email, password){
    setUser.call(this, username);
    this.email=email;
    this.password=password;
}

const chai=new createUser("imabhishek", "abhi@yopmail.com", 123456);
console.log(chai);