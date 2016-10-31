/*
*  Chris Lee - Assignment 4-1-Array Practice
*
*
*/


/**
 * Creates a 10 item array filled with random numbers between 0-100
 */
function getRandNum(){
  var randArray = [];
  for ( i = 0; i < 10; i++) {
      randArray.push(Math.floor((Math.random() * 100) + 1));
  }
  return randArray;
}


/**
 * Returns the Even indexes of an array into new array
 * @param {array} inputArray The array that you want the even indexes for
 */
function getEvenIndexes(inputArray){
  var outputArray = [];
  for (i = inputArray.length-1; i >= 0; i = i - 2){
    outputArray.push(inputArray.shift());
    inputArray.shift();
  }
  return outputArray;
}


// Testing Random Array Function
document.write("Random number array 1: " + getRandNum().toString() + "<br>");
document.write("Random number array 2: " + getRandNum().toString() + "<br>");
document.write("Random number array 3: " + getRandNum().toString() + "<br><br>");

// Testing Even Index Function
var testArray = [0,1,2,3,4,5,6,7,8,9,10,11,12]
document.write("Test Array: " + testArray.toString() + "<br>");
document.write("Even Index Array " + getEvenIndexes(testArray).toString());
