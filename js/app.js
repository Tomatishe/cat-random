var button = document.querySelector(".btn");
var image = document.querySelector(".img");
var url = "https://cataas.com/cat";


// async function fetchHandler() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     image.src = data.file;  
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// function rerollCat () {
//   var image = document.getElementById("myImage");
//   if(image.src.match('img/cat-default.jpg')){
//     image.src = 'https://cataas.com/cat';
//   }
// }

button.addEventListener("click", () => {
  var isLoaded = image.complete;

  if (isLoaded) {
    image.src = 'https://cataas.com/cat';
  }
});
