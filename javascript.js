// How many times has fathers day landed on June 16 since 1959
// Fathers day is the third sunday in june
// So ideally we just create a list of every fathers day and every bday and see which ones add up?

let firstDay = new Date("1959-06-16");
console.log(firstDay)

function addDays(date, days){
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

console.log(addDays(firstDay, 1));


const timestamp = new Date(now);
console.log(`timestamp: ${timestamp}`);



// Log SQL reading 7/19
// Log SQL totorial progress 7/20
// Log SQL tutorial progress 7/21
// Log SQL tutorial progress 7/22
// Continued sql training 7/23
// Continued sql training 7/24
// Marked database section complete