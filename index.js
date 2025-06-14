// Array of button colors
const buttonColors = ["red", "blue", "green", "yellow"];

// Array to store the game pattern
// Initializing the game pattern with the random color
var gamePattern = [];

// Variable for user clicked pattern
var userClickedPattern = [];

//Check which button is pressed
$(".btn").click(function(){
    var userChoosenColor = $(this).attr("id");
    userClickedPattern.push(userChoosenColor);

    // Play the sound of the selected color
    playAudio(userChoosenColor);
    // Animate the button press
    animatePress(userChoosenColor);
});

// animation for the button press
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(()=>{
        $("#"+currentColor).removeClass("pressed");
    },100); //delay of 1-second
}

//function for generating Random Number....
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    
    // Random Color Selection from ButtonColors Array by nextSequence Function
    var randomChoosenColor = buttonColors[randomNumber];
    
    // Push the selected color to the game pattern
    gamePattern.push(randomChoosenColor);

    // Animate the selected color
    $("#"+randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).FadeIn(100);

    // Play the sound of the selected color
    playAudio(randomChoosenColor);

    // Return the selected color
}


// Function to play audio for the selected color
function playAudio(name){
        var audio = new Audio("sounds/"+ name +".mp3");
        audio.play();
};