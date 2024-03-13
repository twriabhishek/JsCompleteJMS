//1)Promise javascript m abhi es6 se hi introduce hui hai iskey pahley agar humko async operations karney hotey theey then we either use async/await or use 
// Q or Bluebird libraries of Promise to handle Promise functionalty.


//2)Promise ke 2 parts hotey hai one is hum promise ko create kartey hai second is hum promise ko consume kartey hai.


//Promise creation
const promiseOne=new Promise((resolve, reject)=>{
    //Do all async operation
    //DB calls, Cryptography related task, network related task

    setTimeout(()=>{
        console.log("Async task One is complete");
        resolve(); //to connect resolve with promiseOne
    }, 1000)

})

//Promise consume

//1) .then ka seedha relation resolve ke sath hota hai.
//2) .catch ka seedha relation reject ke sath hota hai.
//3) .finally last m chalta hi chalta hai.
promiseOne.then(()=>{
    console.log("Promise One consumed");
})





//////////////////////////
//In single part we handle promise
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task two is completed");
        resolve();
    },1000)
}).then(()=>{
    console.log("Promise two consumed");
})





///////////////////////////
const promiseThree=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const randomData={"results":[{"gender":"female","name":{"title":"Mrs","first":"Mestan","last":"Dağdaş"},"location":{"street":{"number":939,"name":"Istiklal Cd"},"city":"Tokat","state":"Batman","country":"Turkey","postcode":65734,"coordinates":{"latitude":"64.9445","longitude":"104.7560"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"mestan.dagdas@example.com","login":{"uuid":"948d17be-97d4-4937-aab8-7a8ace654160","username":"orangeladybug679","password":"polopolo","salt":"B1qMnBAP","md5":"c91c7fec0cabd67d74154fbf442716b9","sha1":"bd101205e46bafdc82ea0e879ca83882d67d4308","sha256":"7e1def394af929f6bbd3bd3f8794364f6b290a7821f47c34dc87540b372cdfdd"},"dob":{"date":"1974-06-09T06:39:49.036Z","age":49},"registered":{"date":"2015-02-02T02:38:00.318Z","age":9},"phone":"(933)-313-0068","cell":"(679)-300-3121","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/77.jpg","medium":"https://randomuser.me/api/portraits/med/women/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/77.jpg"},"nat":"TR"}],"info":{"seed":"3adc9886a8cee3cf","results":1,"page":1,"version":"1.4"}}
        console.log("Async task three is completed");
        resolve(randomData);
    },1000)
})

promiseThree.then((data)=>{
    console.log("Promise three consumed");
    console.log(data);
})





//////////////////////////////
const promiseFour=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const randomData={"results":[{"gender":"female","name":{"title":"Mrs","first":"Mestan","last":"Dağdaş"},"location":{"street":{"number":939,"name":"Istiklal Cd"},"city":"Tokat","state":"Batman","country":"Turkey","postcode":65734,"coordinates":{"latitude":"64.9445","longitude":"104.7560"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"mestan.dagdas@example.com","login":{"uuid":"948d17be-97d4-4937-aab8-7a8ace654160","username":"orangeladybug679","password":"polopolo","salt":"B1qMnBAP","md5":"c91c7fec0cabd67d74154fbf442716b9","sha1":"bd101205e46bafdc82ea0e879ca83882d67d4308","sha256":"7e1def394af929f6bbd3bd3f8794364f6b290a7821f47c34dc87540b372cdfdd"},"dob":{"date":"1974-06-09T06:39:49.036Z","age":49},"registered":{"date":"2015-02-02T02:38:00.318Z","age":9},"phone":"(933)-313-0068","cell":"(679)-300-3121","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/77.jpg","medium":"https://randomuser.me/api/portraits/med/women/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/77.jpg"},"nat":"TR"}],"info":{"seed":"3adc9886a8cee3cf","results":1,"page":1,"version":"1.4"}}
        const error=false;
        if(!error){
            console.log("Async task four is completed");
            resolve(randomData);
        }
        else{
            console.log("Async task four is rejected");
            reject("Something went wrong");
        }
    },1000)
})

promiseFour
.then((data)=>{
    console.log("Promise four is consumed");
    return (data.info);
})
.then((data)=>{
    console.log("Promise four is consumed in the second then");
    console.log(data);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Promise is either resolved or rejected");
})



//jarori nahi hai ki promise ko .then().catch().finally() s hi handle kiya jaye. ismey hum async await bhi use karr saktey hai.
//Jab hum async await use kartey hai then async await error ko gracefully handle nahi kar pata iskey liye try catch use hota hai.


const promiseFive=new Promise((resolve, reject)=>{
    const randomData={email:"abhishek@yopmail.com", password:"12345678"}
    const error=true;
    if(!error){
        console.log("Async task five is completed");
        resolve(randomData);
    }
    else{
        console.log("Async task five is rejected");
        reject("Something went wrong");
    }
})

async function consumepromiseFive(){
    try {
        const  response=await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive();




///////////////////////////////////////////////////////////////////////////
//https://jsonplaceholder.typicode.com/users

const getAllUser= async ()=>{
    const users=await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(users);
}

getAllUser();