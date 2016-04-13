//about-me guessing game

//variable declaration
var myPrompts = ['Was I born in Canada - Yes or No?',
'Do I like to bake cookies - Yes or No?',
'Did I have a pet pig - Yes or No?',
'Did I work at a fruit cannery - Yes or No?',
'Do I currently live in Portland, Oregon - Yes or No?',
'How many miles is it to bike from my house to CodeFellows? Enter a number between 1 and 10.'];
var myAnswers = ['YES','NO','YES','YES','NO',6];
var correctAnswers = 0;

// let's start here, asking for user input.
var userName = prompt('Hello, what is your name?');
alert('Hi, ' + userName + ' let\'s play a guessing game about me! You have 6 questions to answer.');

for (i = 0; i < myPrompts.length; i++)
{
  var answer1 = prompt(myPrompts[i]);
  if (answer1 === null) {
    break;
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
alert('Thanks for playing! You answered ' + correctAnswers + 'out of ' + myPrompts.length + ' questions correctly!');
