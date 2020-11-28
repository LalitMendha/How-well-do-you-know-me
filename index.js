//Assignment 1
console.log("How well do you know me quiz !!")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + " Welcome to Lalit's Quiz !!");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var questionArray = [{
  question: "What is Lalit's favourite color?",
  answer: "Blue",
  options: ["Red", "Green", "Blue", "Yellow"]
},
{
  question: "Which country does Lalit dream to Visit?",
  answer: "Switzerland",
  options: ["Iceland" ,"Switzerland", "Tanzania", "Australia"]
},
{
  question: "Which sports does Lalit likes to play the most?",
  answer: "Volleyball",
  options: ["Cricket" ,"Volleyball", "Football", "Basketball"]
},
{
  question: "Kind of Movies does Lalit Likes?",
  answer: "Action",
  options: ["Thriller" ,"Comedy", "Romantic", "Action"]
},
{
  question: "Which is Lalit's favourite season?",
  answer: "Winter",
  options: ["Spring" ,"Summer", "Autumn", "Winter"]
},
{
  question: "What does Lalit drinks the Most?",
  answer: "Tea",
  options: ["Tea" ,"Beer", "Green Tea", "Coffee"]
},
{
  question: "Which fast food does Lalit prefer?",
  answer: "Subway",
  options: ["Pizza" ,"Subway", "KFC", "McDonalds"]
},
{
  question: "Lalit's favourite TV Series?",
  answer: "FRIENDS",
  options: ["Scam 1992" ,"Breaking bad", "FRIENDS", "The Walking Dead"]
}
]
var question, answer, score, index;
score = 0;
for(var i=0; i< questionArray.length; i++){
  question = questionArray[i].question;
  index = readlineSync.keyInSelect(questionArray[i].options, question, 0);
 if(questionArray[i].options[index] === undefined){
   break;
 }else{
   answer = questionArray[i].options[index];
 }
  score = checkAnswer(answer, i, score);
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Your Total score is: ", score);
console.log("~~~~~~ Thank You " +userName+ "!! ~~~~~~~~");

function checkAnswer(inputAnswer, index, score) {
  var correctAnswer = questionArray[index].answer;
  if(correctAnswer.toUpperCase() == inputAnswer.toUpperCase()){
    console.log("That's Correct !!");
    score = score + 1;
    console.log("Your score is: ", score);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    return score;
  }else {
    console.log("Sorry that's wrong answer!!");
    score = score + 0;
    console.log("Your score is: ", score);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    return score;
  }
}
