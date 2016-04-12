alert('Hi, let\'s play a guessing game about me! You have 5 questions to answer.');
var myPrompts = ['Q1','Q2','Q3','Q4','Q5'];
var myAnswers = ['YES','NO','YES','YES','NO'];
var correctAnswers = 0;

for (i = 0; i < myPrompts.length; i++)
{
  var answer1 = prompt(myPrompts[i]);

  if (answer1.toUpperCase() === myAnswers[i][0] || answer1.toUpperCase() === myAnswers[i]) {
    console.log('The user response to: ' + myPrompts[i] + ' is ' + answer1);
    correctAnswers ++;
  }
  else {
    alert('Sorry, that was incorrect!');
  }

}
  alert('You answered ' + correctAnswers + ' questions correctly!');
