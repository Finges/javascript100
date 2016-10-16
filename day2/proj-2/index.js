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
//**
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

// Get board width, loop until entry is valid.
while (battlefieldWidth < 5 || battlefieldWidth > 20 || battlefieldWidth == undefined) {
  if (battlefieldWidth == undefined) {
    battlefieldWidth = prompt("How wide do would you like your battlefield? (5-20)");
  } else {
    battlefieldWidth = prompt('Your battlefield width has to be between 5 and 20, Please try again');
  }
}

// Calculate what a row of the board looks like
for (i = 0; i < battlefieldWidth; i++) {
 boardRow = "w" + boardRow;
}

// Personalize Greeting on page
document.getElementById("title").innerHTML = "Welcome " + firstName + " " + lastName + " to the Game!";

// Display Board
document.getElementById("board").innerHTML = boardRow;
