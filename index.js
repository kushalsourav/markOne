var readlineSync = require('readline-sync');
 
var score = 0;

var userName = readlineSync.question('May I have your name? ');

console.log("Welcome " + userName + " Do you know Kushal?");


function play(question , answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer) {
    console.log("right!");
    score ++;
  } else {
    console.log("Wrong!")
  }
  console.log("Current score :", score);
  console.log("___________");
}

var questions = [{
  question : "Where do i Live? ",
  answer : "tumkur"
},
{
  question : "which is my fav show ? ",
  answer: "breaking bad"
}, {
  question : "who is my fav super hero ? ",
  answer : "superman"
}]

for(var i = 0; i < questions.length ; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer);
}

console.log("your final score = ", score)