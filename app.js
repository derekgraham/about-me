alert('Hi, let\'s play a guessing game about me! You have 5 questions to answer.');
var myPrompts = ['Was I born in Canada - Yes or No?','Do I like to bake cookies?','Q3','Q4','Q5'];
var myAnswers = ['YES','NO','YES','YES','NO'];
var correctAnswers = 0;

for (i = 0; i < myPrompts.length; i++)
{
  var answer1 = prompt(myPrompts[i]);
  if (answer1 === null) {
    i = myPrompts.length + 1;
  }
  else if (answer1.toUpperCase() === myAnswers[i][0] || answer1.toUpperCase() === myAnswers[i]) {
    console.log('The user response to: ' + myPrompts[i] + ' is \"' + answer1 + '\" -- CORRECT!');
    correctAnswers ++;
  }
  else {
    console.log('The user response to: ' + myPrompts[i] + ' is \"' + answer1 + '\" -- WRONG!');
    alert('Sorry, that was incorrect!');
  }

}
alert('Thanks for playing! You answered ' + correctAnswers + ' questions correctly!');
