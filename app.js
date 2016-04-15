//about-me guessing game

//variable declaration
var myPrompts = ['Was I born in Canada? Yes or No?',
'Is Maple Bacon my favorite doughnut flavor? Yes or No?',
'Did I have a llama on the farm where I grew up?- Yes or No?',
'Did I work at a fruit cannery? Yes or No?',
'Do I currently live in Portland, Oregon?  Yes or No?',
'How many miles is it to bike from my house to CodeFellows? Enter a number between 1 and 10.',
'Can you guess an animal that was on the farm where I grew up?'
];

var correctResponse = 'Yes, that is correct!';
var myAnswers = ['YES','YES','NO','YES','NO',6,['Pig','Horse','Goat','Chicken']];
var correctAnswers = 0;
var userGuesses = 4;
var questionIndex = 0;

function fiveQuestions() {
  for (i = 0; i < 5; i++) {
    var answer1 = prompt(myPrompts[i]);
    if (answer1 === null) {
      break;
    } else if (answer1.toUpperCase() === myAnswers[i][0] || answer1.toUpperCase() === myAnswers[i]) {
      console.log('The user response to: ' + myPrompts[i] + ' is \"' + answer1 + '\" -- CORRECT!');
      alert(correctResponse);
      correctAnswers ++;
    } else {
      console.log('The user response to: ' + myPrompts[i] + ' is \"' + answer1 + '\" -- WRONG!');
      alert('Sorry, that was incorrect!');
    }
  }
}
// prompt for this is in the array position 6, index 5
function question6() {
  for (var i = 4; i > 0 ; i-- ){
    {
      // answer1 = parseInt(prompt(myPrompts[5] + ' You have ' + (4 - i) + ' guess' + ( function() { if(( 4 - i) > 1) { return 'es'; } else return '';}() ) + ' remaining.'),10);
      answer1 = parseInt(prompt(myPrompts[5] + ' You have ' + i + ' guess' + ( function() { if( i > 1) { return 'es'; } else return '';}() ) + ' remaining.'),10);
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
    }
  }
}
function question7() {
  'use strict';
  for (var i = 6; i > 0; i--) {
    answer1 = prompt(myPrompts[6] + ' You have ' + i + ' guess' + ( function() { if( i > 1) { return 'es'; } else return '';}() ) + ' left.');
    for (var j = 0 ; j < myAnswers[6].length ; j++){
      var gotOne = false;
      if (answer1.toUpperCase().startsWith( myAnswers[6][j].toUpperCase()))
      {
        gotOne = true;
        break;
      }
    }
    if (gotOne){
      alert('That\'s correct!');
      correctAnswers++;
      break;
    }
    else {
      alert('Sorry, ' + userName + ', ' + answer1 + ' is not correct. Please try again');
      continue;
    }
  }
  alert('The possible anwsers to the question were: ' + ( function() { var test = ''; for (var k = 0; k < myAnswers[6].length - 1 ; k++) { test = test + myAnswers[6][k] + 's, '; } test = test + 'and ' + myAnswers[6][k] + 's.'; return test; }()));
}

// let's start here, asking for user input.
var userName = prompt('Hello, what is your name?');
if (userName != null ){
  alert('Hi, ' + userName + ', let\'s play a guessing game about me! You have 7 questions to answer.');

  fiveQuestions();
  question6();
  question7();

  alert('Thanks for playing, ' + userName + '! You answered ' + correctAnswers + ' out of ' + myPrompts.length + ' questions correctly!');
}
