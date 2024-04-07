
const image = document.getElementsByClassName("giphy")[0];
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=5jeNgWyeCz9wEcAY4RqoWnk5ls4jayVF&s=cats",
  { mode: "cors" }
).then(function(response) {
  return response.json();
})
.then(function(response){
  console.log(response);
  console.log(response.data.images.original.url);

  const URLresponse = response.data.images.original.url;
image.src = URLresponse;
})



// Success!!! We have achieved gif