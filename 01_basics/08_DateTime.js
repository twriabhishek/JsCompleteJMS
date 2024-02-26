let myDate = new Date();

//Date ek object hai js m
//Month start with zero

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// 2024-02-26T10:05:46.614Z
// Mon Feb 26 2024 15:35:46 GMT+0530 (India Standard Time)
// 2024-02-26T10:05:46.614Z
// Mon Feb 26 2024
// 15:35:46 GMT+0530 (India Standard Time)
// 26/2/2024
// 26/2/2024, 3:35:46 pm





let timestamp = Date.now();
console.log(timestamp); //MS
console.log(Math.floor(timestamp / 1000)); //Sec
console.log(Math.floor(timestamp / (1000 * 60))); //Min

function calculateAge(dob) {
  // Convert date of birth string to Date object
  const birthday = new Date(dob);

  // Get current date
  const now = new Date();

  // Calculate difference in milliseconds
  const diffMs = now - birthday;

  // Calculate milliseconds in a year, month, and day
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const msPerMonth = msPerYear / 12;
  const msPerDay = 1000 * 60 * 60 * 24;

  // Calculate years
  const years = Math.floor(diffMs / msPerYear);

  // Calculate the remaining milliseconds after subtracting the years
  const remainingMs = diffMs % msPerYear;

  // Calculate months
  const months = Math.floor(remainingMs / msPerMonth);

  // Calculate the remaining milliseconds after subtracting the months
  const remainingMsAfterMonths = remainingMs % msPerMonth;

  // Calculate days
  const days = Math.floor(remainingMsAfterMonths / msPerDay);

  // Calculate the remaining milliseconds after subtracting the days
  const remainingMsAfterDays = remainingMsAfterMonths % msPerDay;

  // Calculate hours
  const hours = Math.floor(remainingMsAfterDays / (1000 * 60 * 60));

  return { years, months, days, hours };
}

// Example usage
const dob = "1999-01-13"; // Date of birth in YYYY-MM-DD format
const age = calculateAge(dob);
console.log(`You are ${age.years} year, ${age.months} month, ${age.days} days and ${age.hours} hours`);
