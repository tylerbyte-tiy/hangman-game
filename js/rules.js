const hangman = (function() {



var answerWord= '';
var guess;
var guessedLetters = '';
var guessProgress= '';
var status = 'status';
var tries = '8';

var commonWords = [
  "the","and","you","that","was","for","are","with","his",
  "they","this","have","from","one","had","word","but",
  "not","what","all","were","when","your","can","said",
  "there","use","each","which","she","how","their","will",
  "other","about","out","many","then","them","these","sock",
  "some","her","would","make","like","him","into","time",
  "has","look","two","more","write","see","number","way",
  "could","people","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did",
  "get","come","made","may","part"];


function getWord() {
  answerWord = commonWords[Math.floor(Math.random () * commonWords.length)];
  return answerWord;
}

document.querySelector('.triesCount').innerHTML = 'Tries: ' + tries;

function setAnswerWord() {
answerWord = getWord();
}

function setProgress() {
  for (var i = 0; i < answerWord.length; i++) {
    guessProgress+='_ '
  }
}

function showProgress () {
  document.querySelector('.progressHolder').innerHTML = guessProgress;
}

function inputGuess () {
  return document.querySelector('guessLetter').value;
}

function setGuess() {
  guess = inputGuess();
  updateGuess();
}

document.querySelector('.submitGuess').onclick = setGuess;

function updateGuess() {
let ansArray = answerWord.split('');
let progArray = guessProgress.split('');
for (let i = 0; i < answerWord.length; i++) {
  if (ansArray[i] === guess) {
    progArray[i] = guess;
  }
}
answerWord = ansArray.join('');
guessProgress = progArray.join('')
showProgress();
checkMath();
setStatus();
trackGuesses();
checkWin();
checkLose();
console.log(guessedLetters);
}

function checkMath() {
  if (answerWord.includes(guess)) {
    document.querySelector('.triesCount').innerHTML = "Tries: " + tries;
    return true;
  } else {
    document.querySelector('triesCount').innerHTML = "Tries: " + tries;
    return false;
  }
}

function trackGuesses() {
  document.querySelector('.guessedLetters').innerHTML = 'You have already guessed' + guessedLetters;
}

function setStatus() {
  if (checkMath() === true) {
    status = "Good job! Keep guessing.";
    guessedLetters+=guess.toUpperCase() + ', ';
  } else {
    status = 'Nope! Try again.'
    tries--;
    document.querySelector('triesCount').innerHTML = 'Tries: ' + tries;
    guessedLetters += guess.toUpperCase() + ", "
  }
  document.querySelector('.statusHolder').innerHTML = status;
}

function checkLose() {
  if (tries <= 0) {
    status = 'You Lost!';
    document.querySelector('.statusHolder').innerHTML = status;
    document.querySelector('.submitGuess').disabled = true;
    return true;
  }
}

function checkWin() {
  if (guessProgress.includes('_')) {
    return false;
  } else {
    status = 'You won!';
    document.querySelector('statusHolder').innerHTML = status;
    document.querySelector('submitGuess').disabled = true;
    return true;
  }
}

setAnswerWord();
setProgress();
showProgress();


return {
  getWord: getWord,
  setAnswerWord: setAnswerWord,
  setProgress: setProgress,
  showProgress: showProgress,
  inputGuess: inputGuess,
  setGuess: setGuess,
  updateGuess: updateGuess,
  checkMath: checkMath,
}
})();

module.exports = hangman
