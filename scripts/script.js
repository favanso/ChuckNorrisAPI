const handleClick = async () => {
  const url = "https://api.chucknorris.io/jokes/random?category=dev";
  const output = document.getElementById("output");
  let message = "";
  const img = document.getElementById("img");

  img.src = "assets/Img2.jpg";
  img.setAttribute("width", "200");
  img.setAttribute("height", "210");

  try {
    const response = await fetch(url);
    const json = await response.json();
    output.innerHTML = json.value;
    setTimeout(reset, 10000);
  } catch (e) {
    console.log(e.message);
    handleError();
  }
};

const reset = () => {
  const img = document.getElementById("img");
  const output = document.getElementById("output");
  output.innerText = "";
  img.src = "assets/download.jpg";
  img.setAttribute("width", "200");
  img.setAttribute("height", "150");
};

const handleError = () => {};
