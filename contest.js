console.log("\n\t\t\t\t\tWELCOME TO MY SECOND CLI APP\n\nThe Ultimate \"Fast and Furious\" Movies Quiz? \n\nThere needs to be two participants to play this quiz. The participant with the highest score will be the winner....!");
var readlineSync = require("readline-sync");
var userName = [];
var num = 1;
for (var j = 0; j < 2; j++) {
  var name = readlineSync.question("\nEnter person " + num + " name ? ");
  userName.push(name);
  num++;
}

var scores = {};
var score = 0;

// processing
function quizGame(question, answer, frameworks) {
  var index = readlineSync.keyInSelect(frameworks, question, { cancel: false });
  var userAnswer = frameworks[index];

  if (userAnswer === answer) {
    console.log("Right! Answer is correct.....");
    score = score + 1;
  } else {
    console.log("WRONG! Answer is not correct.....");
  }
  console.log("Your score is " + score);
  console.log("-----------------------------")
}

// Questions
var questionOne = {
  question: "In Fast & Furious 6, which character’s return prompts Dom’s crew to go to London in search of Owen Shaw? ",
  answer: "Letty"
}

var questionTwo = {
  question: "Which car does Dom keep in his garage until he drives it at the end of The Fast and the Furious? ",
  answer: "Dodge Charger R/T"
}

var questionThree = {
  question: "Where do Dom and Brian stash Braga’s heroin in Fast & Furious?  ",
  answer: "in a police auto pound"
}

var questionFour = {
  question: "In Fast & Furious 6, Owen Shaw calls out Dom for always putting what first? ",
  answer: "family"
}

var questionFive = {
  question: "What is the name of the advanced hacking device created by Ramsey in Furious 7? ",
  answer: "God’s Eye"
}

// For multiple-choice questions, define the frameworks array
questionOne.frameworks = ['Letty', 'Vince', 'Johnny Tran', 'Hernan Reyes'];
questionTwo.frameworks = ['Volkswagen Jetta', 'Dodge Charger R/T', 'Mazda RX-7', 'Mitsubishi Eclipse'];
questionThree.frameworks = ['in a bank', 'in the Toretto house', 'in a police auto pound', 'in the ground'];
questionFour.frameworks = ['family', 'precision', 'revenge', 'honesty'];
questionFive.frameworks = ['Eye of Ra', 'Third Eye', 'Eye of Providence', 'God\’s Eye'];

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];

// Function call
for (var p = 0; p < userName.length; p++) {
  score = 0; // Reset the score for each participant
  console.log("\n • Quiz questions for " + userName[p]);
  for (var i = 0; i < questionList.length; i++) {
    quizGame(questionList[i].question, questionList[i].answer, questionList[i].frameworks)
  }
  scores[userName[p]] = score;
}

var participants1 = {
  name: userName[0],
  marks: scores[userName[0]] // Use the username as the key to access the score
}

var participants2 = {
  name: userName[1],
  marks: scores[userName[1]] // Use the username as the key to access the score
}

var perList = [participants1, participants2]

for (var o = 0; o < perList.length; o++) {
  console.log(perList[o].name + "'s marks: " + perList[o].marks);
  console.log("-------------------------------------")
}

// Determine the winner
if (participants1.marks > participants2.marks) {
  console.log("Congrats!! " + userName[0] + " you win this quiz contest....")
} else if (participants1.marks < participants2.marks) {
  console.log("Congrats!! " + userName[1] + " you win this quiz contest....")
} else {
  console.log("It's a tie! Both participants scored the same.")
}
