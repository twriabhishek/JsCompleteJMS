
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

//ctrl+D:- for select duplicate

for (let i = 1; i <= 10; i++) {
    const elementi = i;
    console.log(`Table of ${elementi}`);
    for (let j = 1; j <= 10; j++) {
        const elementj = j;
        console.log(`${elementi}X${elementj}=${elementi*elementj}`);
    }
}

let myArray=[1,2,3,4,5,6,7,9,10];
let element=0;
for (let i = 0; i < myArray.length; i++) {
    element = element+myArray[i];
}
console.log(element);



//break and continue

for (let i = 0; i <= 10; i++) {
    if(i==5){
        console.log("Break detected");
        break
    }
    console.log(i);
}
for (let i = 0; i <= 10; i++) {
    if(i==5){
        console.log("Continue detected");
        continue
    }
    console.log(i);
}