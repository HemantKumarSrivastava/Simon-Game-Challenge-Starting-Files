// Array of button colors
const buttonColors = ["red", "blue", "green", "yellow"];

// Array to store the game pattern
// Initializing the game pattern with the random color
var gamePattern = [];

// Variable for user clicked pattern
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("level " + level);
    nextSequence();
    started = true;
  }
});

//Check which button is pressed
$(".btn").click(function () {
  var userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);

  // Play the sound of the selected color
  playAudio(userChoosenColor);
  // Animate the button press
  animatePress(userChoosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    } else{
        playAudio("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);   
        startOver();
    }
}


//function for generating Random Number....
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("level " + level);
  //
  var randomNumber = Math.floor(Math.random() * 4);

  // Random Color Selection from ButtonColors Array by nextSequence Function
  var randomChoosenColor = buttonColors[randomNumber];

  // Push the selected color to the game pattern
  gamePattern.push(randomChoosenColor);

  // Animate the selected color
  $("#" + randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  // Play the sound of the selected color
  playAudio(randomChoosenColor);
}


// animation for the button press
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed");
  }, 100); //delay of 1-second
}


// Function to play audio for the selected color
function playAudio(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}