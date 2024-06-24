/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function(hungry, availableTime) {

  // need to write a function that compares if hungry is true or false, which is false writes down "get back to work!"
  if (hungry === false) {
    console.log("I'm not hungry, so lets get back to work bro!");
  // we now need to write another conditional that if hungry is true and available time is less than 20 minutes, it says ""
  } else if (hungry === true && availableTime < 20) {
    console.log("Lets grab something nearby and eat at the lab");
    // if hungry and have between 20-30 mins we go eat somewhere nearby
  } else if (hungry === true && availableTime <=  30) {
    console.log("I have enough time, lets go somewhere nearby and eat");
  } else if (hungry === true  && availableTime >= 30) {
    console.log("I don't have as much time as I think I do, we're in a bootcamp!");
  }
};



/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);