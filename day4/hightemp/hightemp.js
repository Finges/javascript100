/*
 * Chris Lee
 * Assignment 4-2 Temperatures in arrays
 */
 
var tempsForWeek = [];
tempsForWeek[0] = [56, 59, 63, 66, 67, 69, 70, 69, 65, 62, 59, 56]; // Monday
tempsForWeek[1] = [57, 59, 61, 64, 67, 69, 70, 71, 71, 69, 67, 64]; // Tuesday
tempsForWeek[2] = [58, 60, 62, 64, 66, 68, 69, 70, 70, 69, 62, 57]; // Wednesday
tempsForWeek[3] = [57, 56, 69, 62, 65, 66, 68, 68, 70, 69, 59, 52]; // Thursday
tempsForWeek[4] = [52, 59, 59, 63, 67, 70, 72, 73, 77, 74, 70, 65]; // Friday
tempsForWeek[5] = [60, 58, 62, 64, 69, 70, 74, 75, 77, 77, 74, 72]; // Saturday
tempsForWeek[6] = [63, 63, 64, 68, 71, 74, 75, 76, 77, 75, 74, 73]; // Sunday

// homework:
// Write a function to find the highest temperature of the week.
// Write a function to return an array of days of the week e.g. ["Monday", "Wednesday"]
//   that hit that high temperature

/**
 * Finds highest temp for the week
 * @param {array} array2d An array of days with and array of temps
 */
function findHighTemp(array2d) {
  var highTemp = 0; // Return variable when Highest temp is found
  var allTemp = []; // Array to capture all temps

  // Loop through each day and concatinate all temps into a single array
  for (index = 0; index < array2d.length; ++index) {
    allTemp = allTemp.concat(array2d[index]);
  }

  // Sort the array from Highest to lowest temp then return the first item. Should
  // be the highest temp.
  highTemp = allTemp.sort(function(a,b){return b-a})[0];
  return highTemp;
}

console.log("The highest temperature for the week was: ", findHighTemp(tempsForWeek));

var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/**
 * Finds the days that match the highest temp of the week
 * @param {array} array2d An array of days with arrays of tempsForWeek
 */
function findDaysWithHighestTemp(array2d) {
  var highTemp = findHighTemp(array2d);   // Find the highest temp for the week
  var highTempDays = [];                  // Variable to hold the days that match high temp

  // Loop through each day and see if the day had the highest temp
  for ( index = 0; index < array2d.length; ++index) {
    if (array2d[index].find(function(a){return a == highTemp})){
      highTempDays.push(daysOfWeek[index]);
    }
  }
  return highTempDays;
}

console.log("Days with highest temp: ", findDaysWithHighestTemp(tempsForWeek));
