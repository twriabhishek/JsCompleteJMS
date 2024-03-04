//for-of loop map ke liye mostly use hota hai wahi for-in loop mostly object ke liye use hota hai.

const obj={
    cpp:"C++",
    py:"Python",
    rb:"ruby",
    dj:"django"
}

for (const key in obj) {
    console.log(key, obj[key]);
}