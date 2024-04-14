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
  console.log(response);
  console.log(`response.url: ${response.url}`)
  const URLresponse = response.url;
image.src = URLresponse;
})



console.log(`sup motherfucker`);


const x = 2;
let y = 4;
function update(arg) {
  return Math.random() + y * arg;
}
y = 2;
// What can we put here to make the result always be between 6 and 7??
y = 3

const result = update(x);
console.log(`result: ${result}`);