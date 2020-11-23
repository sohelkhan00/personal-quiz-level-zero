var readlineSync = require('readline-sync');

var score = 0 ;

var questions = [{
  question: "Where do i work? ",
  answer: "Axis Bank"
},
{
  question: "Where am i from? ",
  answer: "Indore"
},
{
  question: "My bachelors degree is in? ",
  answer: "Mech engg"
}
]

var usersScore = [{
  name: "sohel",
  score: "3"
},
{
  name: "rahul",
  score: "2"
},
{
  name: "mayank",
  score: "1"
},
{
  name: "dev",
  score: "1"
}]

var name = readlineSync.question("What is your name? ");
console.log("Welcome " + name);
console.log("Lets Play");
console.log();

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  console.log("You entered: " + userAnswer);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("You are right.");
    score++;
    console.log("Your score: "+ score);    

  }else{
    console.log("Your are wrong");
    score--;
    console.log("Your score: "+ score);
  }
}

for(var i=0; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

sortedList = usersScore.sort(function(a,b){
  return a.score - b.score;
})

console.log("Highest Score: " + sortedList[sortedList.length-1].score);

console.log("Please share screenshot if you have break the record.");
