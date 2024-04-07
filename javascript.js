
const image = document.getElementsByClassName("giphy")[0];
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=5jeNgWyeCz9wEcAY4RqoWnk5ls4jayVF&s=dogs",
  { mode: "cors" }
).then(function(response) {
  return response.json();
})
.then(function(response){
  console.log(response);
  console.log(response.data)
//   console.log(response.data.images.original.url);

//   const URLresponse = response.data.images.original.url;
// image.src = URLresponse;
  // return URLresponse;
})


// This friggin worked a minute ago and now its saying response.data contains an empty array????
// That does make it seem like it's on the server side....

// IT IS A PROBLEM WITH THE SERVER!!!!!!!!
//  Giphy says I exceeded my limit
