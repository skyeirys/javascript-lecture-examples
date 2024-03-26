// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 17: EXCEPTIONS


/* Throwing an Exception */

function getPrize(kid, prize) {
	console.log(`\nSomewhere nearby, you could swear you hear several tiny voices say, "It's the claaaawwwww! You have been chosen!"`);
	// TODO: Throw an exception if Sid tries to get Buzz out of the machine

	console.log(`\nCongrats, ${kid}! you got the ${prize} toy!`);
}

// TODO: Have Andy try for a three-eyed alien

// TODO: Have Sid try for Buzz Lightyear


/* Try, Catch, Finally */

// TODO: Use a try/catch/finally series in the function below to prevent your program from crashing
function executeReconPlanCharlie(action) {
	let actions = {
		mobilize: "\nAlright men, listen up! We've got a Code Red!",
		recon: "\nTime to scope out the birthday presents!",
		help: "\nA good soldier never leaves a man behind.",
		affirm: "\nMission accomplished! Well done, men.",
		warn: "\nRed alert! Red alert! Andy is coming upstairs!"
	};
	
  // TODO: Move the reassignment and console.log below into the try block
  action = action.toLowerCase();
  console.log(actions[action]);

  // TODO: Put the final console.log inside a finally block
  console.log("*** RECON PLAN CHARLIE ***\n");	
}

// TODO: Mobilize the men

// TODO: Do some recon

// TODO: Warn the toys upstairs about the kids headed their way

// TODO: Try to call the function with a string that is not a key in the actions object

// TODO: Try to call the function without an action

// That's it!

// console.log("\nIf you're seeing this, you've handled your errors without crashing your program!");
