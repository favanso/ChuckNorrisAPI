
function handleClick() {
  

  let url = "https://api.chucknorris.io/jokes/random?category=dev";
  let output = document.getElementById("output");
  let message = "";
  let img = document.getElementById("img");

  img.src = "assets/Img2.jpg";
  img.setAttribute("width", "200");
  img.setAttribute("height", "210");
  
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      message = json.value;

      output.innerHTML = message;
    })
    .catch((e) => console.log(e.message));


setTimeout(reset, 10000);

}

function reset() {
  let img = document.getElementById("img");
  let output = document.getElementById("output");
  output.innerText = "";
  img.src = "assets/download.jpg";
  img.setAttribute("width", "200");
  img.setAttribute("height", "150");
}
