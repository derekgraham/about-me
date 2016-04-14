//about-me guessing game

//variable declaration
var myPrompts = ['Was I born in Canada - Yes or No?',
'Do I like to bake cookies - Yes or No?',
'Did I have a pet pig - Yes or No?',
'Did I work at a fruit cannery - Yes or No?',
'Do I currently live in Portland, Oregon - Yes or No?',
'How many miles is it to bike from my house to CodeFellows? Enter a number between 1 and 10.',
'Can you guess an animal that was on the farm where I grew up?'
];

var correctResponse = 'Yes, that is correct!';
var myAnswers = ['YES','NO','YES','YES','NO',6,['PIG','HORSE','GOAT','CHICKEN']];
var correctAnswers = 0;
var userGuesses = 4;
var questionIndex = 0;

// let's start here, asking for user input.
var userName = prompt('Hello, what is your name?');
alert('Hi, ' + userName + ' let\'s play a guessing game about me! You have 7 questions to answer.');

for (i = 0; i < 5; i++)
{
  var answer1 = prompt(myPrompts[i]);
  if (answer1 === null) {
    break;
  }
  else if (answer1.toUpperCase() === myAnswers[i][0] || answer1.toUpperCase() === myAnswers[i]) {
    console.log('The user response to: ' + myPrompts[i] + ' is \"' + answer1 + '\" -- CORRECT!');
    alert(correctResponse);
    correctAnswers ++;
  }
  else {
    console.log('The user response to: ' + myPrompts[i] + ' is \"' + answer1 + '\" -- WRONG!');
    alert('Sorry, that was incorrect!');
  }

}

// prompt for this is in the array position 6, index 5
do
{
  answer1 = parseInt(prompt(myPrompts[5] + ' You have ' + userGuesses + ' guesses remaining.'),10);
  userGuesses--;
  if ( isNaN(answer1) ) {
    alert('Oops, that was not a number!');
    console.log('User entered NaN');
  }
  else if (answer1 === myAnswers[5]) {
    console.log('The user response to: ' + myPrompts[5] + ' is \"' + answer1 + '\" -- CORRECT!');
    alert(correctResponse);
    correctAnswers ++;
    break;
  }
  else if(answer1 > myAnswers[5]) {
    alert('Sorry, that guess was too high!');
    console.log('The user response to: ' + myPrompts[5] + ' is \"' + answer1 + '\" -- Too high!');
  }
  else {
    alert('Sorry, that was guess was too low!');
    console.log('The user response to: ' + myPrompts[5] + ' is \"' + answer1 + '\" -- Too low!');
  }
} while (userGuesses > 0);

for (i = 0; i < 6; i++) {
  answer1 = prompt(myPrompts[6] + ' You have ' + (6 - i) + ' guesses left.').toUpperCase();
  for (j = 0 ; j < myAnswers[6].length ; j++){
    gotOne = false;
    if (answer1.startsWith(myAnswers[6][j]))
    {
      var gotOne = true;
      break;
    }
  }
  if (gotOne){
    alert('that\'s correct');
    correctAnswers++;
    break;
  }
  else {
    alert('Sorry, ' + userName + ' ' + answer1 + ' is not correct. Please try again');
    continue;
  }

}
alert('The possible anwsers to the question were: ' + myAnswers[6]);

alert('Thanks for playing, ' + userName + '! You answered ' + correctAnswers + ' out of ' + myPrompts.length + ' questions correctly!');
