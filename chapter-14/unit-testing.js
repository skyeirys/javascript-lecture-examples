// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 14: UNIT TESTING


/* 
	In the corresponding spec file, write a test for the MS_PER_YEAR constant below.
*/
const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;


/* 
	In the corresponding spec file, write a test for each property in the object below. Fix any mistakes that are uncovered by the tests.
*/
let bucky = {
	fullName: "James Buchanan Barnes",
	nickname: "The Winter Soldier",
	triggerWords: ["Longing", "rusted", "furnace", "daybreak", "seventeen", "benign", "nine", "homecoming", "one", "freight car"],
	calculateAge: function () { return Math.round((new Date() - new Date(1917, 10, 3)) / MS_PER_YEAR) },
	isHydraAgent: true
};


/** TEST-DRIVEN DEVELOPMENT **/

/*
	TODO: Practice TDD by writing each test before adding code to the function below.

  The function should return true or false depending on whether all of its characters are alphabetical or not.
*/
function isAlphaOnly(str) {

}

// TODO: Export items to be tested
