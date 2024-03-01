//array destructure:-

const mySym = Symbol("Key1");
const details = {
  f_name: "Abhishek",
  l_name: "Tiwari",
  age: 24,
  location: "Lucknow",
  email: "test@gmail.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Sunday", "Tuesday"],
  [mySym]: "myKey1",
};

const { f_name, l_name, age, location, email, isLoggedIn, lastLoginDay } =
  details;
console.log(f_name, l_name, age, location, email, isLoggedIn, lastLoginDay);

//Jab hum apna kaam kisi doosrey k sir parr daal se t wahi api hai. jaise ki hum restra m jatey t bass menu dekhkar khana order kar detey hai then wo jo waiter hai jo khana lekar aaega server karega wo ek api hai.
//Pahley api data ko xml form m return karti thii lekin aab mostly json format use hota hai.
//Yeh ek json hai jismey data key:value pairs m hota hai. 
//object and json both different hai object ka name hota hai json ka koi naam nahi hota.

// {
//     "contactName":"jms",
//     "callId": "9879",
//     "partyNumber": "9506937439",    
//     "lineName": "909000",
//     "partyName": "exatos"
// }


// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }