// Create an empty array to store the user input
let userInputArray = [];
var userInput = prompt("Enter a value (or 'done' to finish):");
while (userInput !== "done") {
  userInputArray.push(userInput);
  userInput = prompt("Enter a value (or 'done' to finish):");

}

console.log(userInputArray);