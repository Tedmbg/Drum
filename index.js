// !detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // var index = i;
    // alert("uuuuuuuu I just got Clicked "+index);
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    console.log(this);
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimantion(buttonInnerHTML);
  });
}
// !Detecting when key is pressed.
//  this alerts when any key is pressed.
document.addEventListener("keydown", function (e) {
  //   alert("A Keeey has been presses Hard 😈");
  //   console.log(e.key);
  //   var key = e.key;
  makeSound(e.key);
  buttonAnimantion(e.key);
});

function makeSound(key) {
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
      var crash = new Audio("sounds/snare.mp3");
      crash.play();
      break;
    case "k":
      var snare = new Audio("sounds/crash.mp3");
      snare.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimantion(currentKey) {
  var activeButton = document.querySelector("." + currentKey); // ! we concatinate for the key to be a class.
  activeButton.classList.add("pressed");

  //$ Delay function
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 105);
}
