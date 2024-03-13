//1)Jaruri nahi hai ki sirf database call/api call m hi await use hoga. Sometimes cryptographic operation m bhi
//await use hota hai.

async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUser();

/////////////////////////////////////////////////////////////////////////////////
//1) Jab ek .then finish ho jata hai then second .then start hota hai.
//2) Fetch() ek khud m promise hai. isko .then() .catch() ki help s resolve karty hai.

fetch('https://jsonplaceholder.typicode.com/users')
.then((resolve)=>{
    return resolve.json();
})
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
})
.finally(()=>{
    console.log("Either resolve or reject run");
})