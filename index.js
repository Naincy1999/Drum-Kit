
//Detecting Button Press.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;


//Adding event listener on each button so that the desired response can be obtained when clicked.
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;                               //Adding object to the even listener. 

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Detecting Keyboard Press.
//Keypress is a event listener added so that when it is pressed it can configure which key is pressed and what sound associated with it needs to be played.
document.addEventListener("keydown", function(event) {    

  makeSound(event.key);

  buttonAnimation(event.key);

});

//What a button needs to do when clicked?
function makeSound(key) {

  switch (key) {
    case "D":
      var tom1 = new Audio("sounds/tom-1.mp3");                 //Creating audio objects to play sound on website.
      tom1.play();
      break;

    case "R":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "U":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "M":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "K":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "I":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "T":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

//Shows which button/key is pressed by highlighting it.
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}