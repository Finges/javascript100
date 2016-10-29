/*
****************************************************
* Laurand Osmeni 10/18/2016 -  Homework Week Three *
****************************************************
*
* Changelog
* 10/29 - Week 4 - Add functions - Chris Lee
*/

/* KEEP THESE COMMENTS
Merge the below code with the code from Project parts 1 and 2 that
you received prior to this project Part 3 Assignment. Be sure to keep the pre-existing Changelog Info showing all the previous developers. Be sure to test
this code */

/** get_name - Get's users name and displays greeting */
function get_name(){
  name = prompt("Hello! Please enter your name."); // added new prompt for users to add their name.
  alert(name + ", welcome to Battleship game."); // added new alert greeting.
  return name;
}

var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location1 + 2;
var guess;
var name = get_name(); // added new var to welcome user, enter their name, the name will appear with the results.
var hits = 0; // added semicolon.
var guesses = 0;
var isSunk = false;
// This code was edited by Cliff Knopik 10-13-16
while (isSunk === false) { // added tripple === here.
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):"); // added missing double quote here.
  if (guess < 0 || guess > 6) { // modyfied here Guess to guess.
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("Noooo! You sank my battleship!");
      }
    } else {
      alert("Neener, Neener, Neener  YOU MISSED");
    } // added missing curly bracket here.
  }
}
var stats = name + ". You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/guesses)*100 + "%"; // added user's name appears with the results.
alert(stats);
