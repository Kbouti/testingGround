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