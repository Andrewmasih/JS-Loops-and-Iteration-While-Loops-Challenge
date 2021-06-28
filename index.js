/* while loops are often used in developing games that require userinput to continue moving forward, with code like while (true) { do stuff }

Challenge.

1/ write a while loop that iterates through the usernames,and for each username logs a valid HTML paragraph tag to the console containing the usernames (e.g <p> useranme1 </p>) 

Requirement.

1/ the output must match exactly, and every username must be included.
*/


// iterate through the Array
let usernames = ["nicky", "zara", "seb", "has", "lieh", "stacy", "sara", "lisa", "nancy", "joey"];

let i = 0;

let names = usernames.length;

while (i < names) {

  console.log(` <p> ${usernames[i]} </p>`);

  i++;

}


