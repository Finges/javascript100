/**********
Author: Chandni Sabhaya : Project part 6
JSCRIPT 100 Course Project

***********
Changelog

10/7/16 - Hannah Notess (JS and HTML files created)

10/15/2016 - Sam Guerrero (Added user prompt for size of the battle field, and code block evaluating vaildity of user input.)

10/18/16 - Jim Beckley (combined variable declarations with the values; corrected the write.)

10/21/16 - Jim Beckley (Added the new-battleship code; tested and corrected it.)

10/22/16 - Jim Beckley (Corrected more of the purchased code; removed the width assignment.

10/29/16 - Brian Teausant (created new function userName, situated globals together at top followed by new function)

11/5/16 - Reed Rotondo - Wrapped the game inside a function named playGame()
11/5/16 - Reed Rotondo - Wrapped the player properties in an object named player1
11/5/16 - Reed Rotondo - Wrapped the ship properties in an object named ship
11/13/16 - Chandni Sabhaya- Added code for project part 6.
11/13/16 - Chandni Sabhaya- Added funciton for random selection of given array


***********/ 
 

/* KEEP THESE COMMENTS
 Merge the below code with the code from Project parts 1 and 2 that
 you received prior to this project Part 3 Assignment. Be sure to keep the pre-existing Changelog Info showing all the previous developers. 
Be sure to test
this code */  

// global variable named gueeses
var guesses = [];

// object named player1, with property captainName and 3 methods
var player1 = {
	captainName: "", 
	// method to get the player's name
	getName: function getCaptainName() {
		player1.captainName = prompt("Battleship captain, please enter your name:"); 
		if (player1.captainName == "") {
			alert("No name? We'll call you Captain Blackbeard...");
		} else {
			alert("Hello, Captain " + player1.captainName);
		}
	},
	// method to get the player's guess
	guess: function myGuess() {
		guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
		if (guess < 0 || guess > 6 || guess == "") {
			alert("Please enter a valid number! (0-6)");
		} else if (guess == ship.shipPositions[0] || guess == ship.shipPositions[1] || guess == ship.shipPositions[2]) {	
			ship.addHit();
			if (ship.hits == ship.shipLength) {
				ship.sunk();
			}
		} else {	
			ship.missedMe();
		}
	},
	// method to display player's stats
	stats: function myStats() {
		var stats = "Captain " + player1.captainName + ", you took " + guesses.length + " guesses to sink the battleship, " +
		"which means your shooting accuracy was " + Math.floor((ship.shipLength / guesses.length) * 100) + "%";
		alert(stats);
	}
};

// object named ship with 4 properties and 3 methods
var ship = {
	shipLength: 3,
	shipPositions: [],
	isSunk: false,
	hits: 0, 
	// method to add a hit to the ship
	addHit: function addOne() {
		this.hits++;
		guesses.push(guess);
		alert("HIT!");
	},
	// method to handle when the player misses
	missedMe: function missed() {
		alert("Neener, Neener, Neener  YOU MISSED");
		guesses.push(guess);
	},
	// method to handle when the ship is sunk
	sunk: function sankMe() {
		ship.isSunk = true;
		alert("Noooo! You sank my battleship!");
	}
}; 

//Chandni : Added function to choose the random index from given array
function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// function - the actual game
function playGame() {
	// get a random number for the first location position
	var randomLoc = Math.floor(Math.random() * 4);
	var guess;
	// Chandni: get random number bet A to D
	var alphabetChoiceArray = ["A","B", "C", "D"];
	// Chandni: Added code to chose random alphabets
	var alphabetId = choose(alphabetChoiceArray);
	// push the random number to the shipPosition array, then add 1 to that position each time thru the loop
	
	for (var i = 0; i < ship.shipLength; i++) {

		ship.shipPositions.push(Number(randomLoc) + Number([i]));
		// Chandni :Added code to chang from W to S for ship location
		var id = alphabetId + (Number(randomLoc) + Number([i]));  		
		document.getElementById(id).innerHTML = "S";
	};
	
	// invoke the method to get the player's name
	//player1.getName();
	// loop to invoke the method to ask the player for a guess
	// while (ship.isSunk == false) {
		// player1.guess();
	// }
	// ship is sunk, so display the player's stats
	// player1.stats();	
}

// invoke the game
playGame();

