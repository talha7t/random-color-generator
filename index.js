var containers = Array.from(document.querySelectorAll(".color-container"));
var titles = Array.from(document.querySelectorAll(".title"));
var generateColor = Array.from(document.querySelectorAll(".generate-color"));
const colorsContainer = document.getElementById("container");

// generating random colors for the first time
containers.forEach((container, index) => {
  changeColor(index);
});

//listening for any clicks on colorsContainer
colorsContainer.addEventListener("click", (e) => {
  generateColor.forEach((generator, index) => {
    if (generateColor[index] == e.target) {
      //if click is on generate button, change color of respective color-container
      changeColor(index);
    }
  });
});

function changeColor(index) {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  containers[index].style.backgroundColor = color;
  titles[index].textContent = color;
}
