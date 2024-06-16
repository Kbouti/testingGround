// How many times has fathers day landed on June 16 since 1959
// Fathers day is the third sunday in june

let firstDay = new Date("1959-06-16");
console.log(firstDay)

function addDays(date, days){
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

console.log(addDays(firstDay, 1));
