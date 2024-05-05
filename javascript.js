// ********************************************************************************************
// posting a random dog picture with random.dog api:
// https://publicapis.io/random-dog-animals-api
// ********************************************************************************************

const image = document.getElementsByClassName("giphy")[0];
fetch(
  "https://random.dog/woof.json"
).then(function(response) {
  return response.json();
})
.then(function(response){
  // console.log(response);
  // console.log(`response.url: ${response.url}`)
  const URLresponse = response.url;
image.src = URLresponse;
})



console.log(`sup motherfucker`);


const cards = [
  {name:"Kevin",
age: 33,
},{name:"Lindsay",age:31},{name:"Chris",age:33}
]
console.log(cards)
console.log(cards[0])

const firstPerson = cards.splice(0,1);

console.log(firstPerson)

// Begin class reading