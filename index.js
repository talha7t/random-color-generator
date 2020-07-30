/*---------------VARIABLE INITIALIZATION---------------------- */

var containers = Array.from(document.querySelectorAll(".color-container"));
var titles = Array.from(document.querySelectorAll(".title"));
var generateColor = Array.from(document.querySelectorAll(".generate-color"));
const colorsContainer = document.getElementById("container");
var copyContent = Array.from(document.querySelectorAll(".text-copy img"));

// generating random colors for the first time
containers.forEach((container, index) => {
  changeColor(index);
});

/*-----------------EVENT LISTENERS--------------- */

//listening for any clicks on colorsContainer
colorsContainer.addEventListener("click", handleContainerEvents);

/*--------------FUNCTIONS---------------- */

function changeColor(index) {
  //function to generate random color and change background of container
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  containers[index].style.backgroundColor = color;
  titles[index].textContent = color;
}

function handleContainerEvents(e) {
  //function to handle events on color-containers

  generateColor.forEach((generator, index) => {
    if (generator == e.target) {
      //if click is on generate button, change color of respective color-container
      changeColor(index);
    }
  });
  copyContent.forEach((content, index) => {
    // if click is on copy content icon, copy text of color in the color-container
    if (e.target == content) {
      copyText(index);
    }
  });
}

function copyText(index) {
  //function to copy text to clipboard
  const selection = window.getSelection(); // save the selection
  const range = document.createRange(); // create range
  range.selectNode(titles[index]);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
}
