const numberOfButtons = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOfButtons; index++) {
  document.querySelectorAll("button")[index].addEventListener("click", function () {

      var buttonInnerHTML = this.innerHTML;
      // console.log(buttonInnerHTML);
      makeSound(buttonInnerHTML)

      buttonAnimation(buttonInnerHTML)

    });
}


addEventListener("keypress", function (e) {
  // console.log(e.key)
  makeSound(e.key)

  buttonAnimation(e.key)
})


function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log("Galat Button dabaya")
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton;

  if (currentKey === "w" || currentKey === "a" || currentKey === "s" || currentKey === "d" || currentKey === "j" || currentKey === "k" || currentKey === "l") {
    activeButton = document.querySelector("." + currentKey);
  } else {
    return; // Don't perform animation for keys other than the drum buttons
  }

  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}