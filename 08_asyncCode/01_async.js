//By default JS ek synchronous and single threaded language hai.
//Execution context: execute one line of code at a time.
//Means jabtak pahley ki line execute nahi ho gayi ho tabtak new line par control nahi aata hai aur na hi code execute hota hai.
//(Each operation waits for the last one to complete before executing.)

//Blocking code vs Non-Blocking code
//Blocking code: tabtak tum kuch matt karna jabtak mai pani nahi lekar aata hu.(Block the flow of program)[Read file Sync]
//Non-Blocking code: tabtak tum apna kaam kartey raho, mai pani nahi lekar aata hu.(Does not block execution)[Read file async]

//1)Hamarey pass ek js engine hota hai aur ek webapi.Jo Js engine hota hai uskey pass ek memory heap hoti hai aur ek call stack hota hai.
//2)Jo webapi hoti hai wo browser m hoti hai. uskey pass DOM API, set Timeout, set Interval, fetch api etc hoti hai.
//3)Jab hum kisi function m async code write kartey hai like settimeout(), timeinterval() etc then wo call webapi ko transfer hoti hai.
// webapi usko register call back m register karta hai then task queue m add hokar call stack m aati hai aur call stack use execute karr deti hai.
//4)Agar hum fetch api, promises etc use kartey hai then aisi call webapi ko transfer hoti hai aur webapi inko high priority queue m
//transfer karta hai then HPQ s yeh request call stack m load hoti hai. aur call stack inko execute karta hai.