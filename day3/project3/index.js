//**********************************************
//** Project: Sink the Bismark!
//** Author: Jim Beckley
//** Date: 10/4/16
//** Part 1
//**
//**********************************************
//** 
//** Change Log
//** 10/15/16 - Add Project Part 2 - ChrisL
//** 10/20/16 - Update With New-battleship.js - ChrisL
//**
//**
//**
//**
//**
//**********************************************

var firstName;
var lastName;
var battlefieldWidth;
var boardRow = "";

// Ask the player for their name and store the answer
firstName = prompt("Please Enter Your First Name");
lastName = prompt("Please Enter Your Last Name");


// Personalize Greeting on page
document.getElementById("title").innerHTML = "Welcome " + firstName + " " + lastName + " to the Game!";


/* KEEP THESE COMMENTS
 Merge the below code with the code from Project parts 1 and 2 that
you received prior to this project Part 3 Assignment. Be sure to keep the pre-existing Changelog Info showing all the previous developers. Be sure to test
this code */
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location1 + 2;
var guess;
var hits = 0
var guesses = 0;
var isSunk = false;
// This code was edited by Cliff Knopik 10-13-16
while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
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

    }
  }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses * 100)+ "%!";
alert(stats);
