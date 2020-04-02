const textInput = document.querySelector("#text");

let textFocus = true

textInput.addEventListener(
  "input",
  function(event) {
    textInput.style.backgroundColor = "blue";
    textInput.style.color = "white";
  },
  false
);