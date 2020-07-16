var container = document.getElementById("container");
var title = document.querySelector(".title");
var generateColor = document.querySelector(".generate-color");

generateColor.addEventListener("click", changeColor, false);

function changeColor() {
  var color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  container.style.backgroundColor = color;
  title.innerHTML = color;
}
