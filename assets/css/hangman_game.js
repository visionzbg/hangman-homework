// JavaScript

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];

var words = ["summer", "animal", "big", "house", "want", "paper", "teacher", "watch", "spring", "school"];
var guessesRemaining = 7;
var wrongLettersArray = [];
//var el = document.getElementById("demo");
//el.innerHTML = spellingWords;
var rand = Math.floor(Math.random() * words.length);
var spellingWords = words[rand];

//Answers

var underscores = [];
for (var i = 0; i < spellingWords.length; i++){
	underscores[i] = "_";
}
console.log('underscores: ', underscores);
var transformedUnderscores = underscores.join(' ');
console.log('transformedUnderscores: ', transformedUnderscores);
document.getElementById('blanks').textContent = transformedUnderscores;
var remainingLetters = spellingWords.length;


document.onkeyup = function(event){
	
	guessesRemaining--;
	var letterGuessed = event.key.toLowerCase();
	// console.log('letterGuessed: ', letterGuessed);
	for(let i = 0;i < underscores.length; i++){
		if (underscores[i].indexOf(letterGuessed) > -1){
			let index = underscores[i].indexOf(letterGuessed);
			underscores[index] = letterGuessed;
		} 
	}
	wrongLettersArray.push(letterGuessed);
	var wrongLetters = wrongLettersArray.join(', ');
	document.getElementById('wrong-guesses').textContent = wrongLetters;
	
} 
//Loop

 while (remainingLetters > 0) {
 	var el = document.getElementById("demo");
 	el.innerHTML = answerArray.join(" ");
	
 	//Guess
	
 	var guess = prompt("Guess a letter to start, or Cancel to end game");
 	if(guess === null) {
 		break;
 	} else if (guess.length !== 1) {
 		alert ("Please enter a letter.");
 	} else {
 		for (var b = 0; b < spellingWords.length; b++) {
 			if (spellingWords[b] === guess){
 				answerArray[b] = guess;
 					remainingLetters--;
 			}
 		}
 	}
	
 	el.innerHTML = answerArray.join(" ");
 	alert("Great job! The answer is " + spellingWords + ".");


  // create alphabet ul
   var buttons = function () {
     myButtons = document.getElementById('buttons');
     letters = document.createElement('ul');

     for (var i = 0; i < alphabet.length; i++) {
       letters.id = 'alphabet';
       list = document.createElement('li');
       list.id = 'letters_1';
       list.innerHTML = alphabet[i];
       check();
       myButtons.appendChild(letters);
       letters.appendChild(list);
 		// startGame();
     }
   }

   }

   documentOnKeyUp.eventListener.(event);``
// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  // Runs the code to check for correct guesses.
  checkLetters(letterGuessed);

  // Runs the code that ends each round.
  roundComplete();
};



