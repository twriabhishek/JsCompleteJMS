//1) The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.
//2) The promise resolves to the Response object representing the response to your request.
//3) A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.



//fetch via then catch method
fetch('https://api.github.com/users/twriabhishek')
.then((resolve)=>{
    return (resolve.json())
})
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
})




//fetch via async await method
async function gitUser(){
    try {
        const response = await fetch('https://api.github.com/users/twriabhishek');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
gitUser();