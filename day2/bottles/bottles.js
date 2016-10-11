/**
 *  Name: Chris Lee
 *  Assignment: Assignment 2-1 Fix the Bug in 99 Bottles
 *
*/

// How many bottles do you want?
var bottles = 99;

// Portion of the verses
var on_the_wall = ' bottles of beer on the wall<br>'
var bottles_of_beer = ' bottles of beer,<br>'
var take_one_down = 'Take one down, pass it around,<br>'


// Loop to start song
while (bottles > 0) {

  // Assemble verses with appropriate number of bottles
  verse = bottles + on_the_wall + bottles + bottles_of_beer + take_one_down;

  // If statement to account for 1 bottle special case
  if (bottles > 1){
    // If it's not 1 bottle of beer add the last stanza
    verse = verse + (bottles - 1) + on_the_wall + '<br>';
  } else {

    // if it is the last verse, replace plural bottles with singular and add No to the last stanza
    verse = verse.replace(/bottles/g, "bottle");
    verse = verse + 'No' + on_the_wall;
  }
  // Print Verse
  document.write(verse);
  bottles--;
}

