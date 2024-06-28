// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 10: FUNCTIONS


const input = require('readline-sync');

// TODO: After defining the function below, call it here
sayGoodbye("Supreme");
// TODO: Define a function to say hello

function sayGoodbye(firstName) {
    console.log(`Goodbye ${firstName}`);
}

// TODO: Write a function that returns a string that will describe one or more enemies
// Allow for a specific action verb

function theEnemies(enemyType, numEnemies, actionVerb) {
    if(numEnemies > 1)
        enemyType = `group of ${numEnemies} ${enemyType}`; 
    return `A ${enemyType} is ${actionVerb} nearby.`;
}


// TODO :Call describeEnemies with real values (arguments) and print the return value
console.log(theEnemies("eagle", 1, "flying above"));
console.log(theEnemies("clowns", 9, "falling from the sky"))

// TODO: Store a description in a variable and then print it

let beetleflies = theEnemies("beetleflies", 3, "circling around");
console.log(beetleflies);


let inventory = [];

// TODO: Write a function that adds an item to Link's inventory and announces it

function addIventory(item) {
    inventory.push(item);
    console.log(`Link has added a ${item} to his inventory`);
}

// TODO: Add a sword and a shield to inventory, then print the inventory array

addIventory("shield and sword");
console.log(inventory);


// TODO: Get the player name from the user in the console
let player = input.question("What is your name? ");


function greetPlayer(message) {
    let greeting = `${message}, ${player}!`;
    console.log(greeting);
}

greetPlayer("What's good");

// TODO: Write a function to greet the player with a message that can change


// TODO: Call the function and pass in a message 

// TODO: Check the scope of player

// TODO: Check the scope of message and greeting


let name = "Zelda";

// TODO: Write a function to print a sentence when you first encounter a character
// Use a parameter, name

// TODO: Call the function with the variable name as the argument

// TODO: Call the function with a hard-coded string

// TODO: Print the variable name
