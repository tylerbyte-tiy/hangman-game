const hangman = (function() {

var answerWord= '';
var guess;
var guessedLetters = '';
var guessProgress= '';
var status = 'status';
var tries = '10';
console.log(answerWord);

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
  console.log('word');
  answerWord = commonWords[Math.floor(Math.random () * commonWords.length)];
  console.log(answerWord);
  return answerWord;
}

document.querySelector('.triesCount').innerHTML = 'Attempts remaining: ' + tries;

function setAnswerWord() {
answerWord = getWord();
}

function setProgress() {
  console.log(answerWord);
  for (var i = 0; i < answerWord.length; i++) {
    guessProgress+='_'
  }
}

function showProgress () {
  document.querySelector('.progressHolder').innerHTML = guessProgress;
}

function inputGuess () {
  return document.querySelector('.guessLetter').value;
}

function setGuess() {
  guess = inputGuess();
  updateGuess();
}

document.querySelector('.submitGuess').onclick = setGuess;

document.querySelector('.submitGuess').disabled = false;

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
    document.querySelector('.triesCount').innerHTML = "Attempts remaining: " + tries;
    return true;
  } else {
    document.querySelector('.triesCount').innerHTML = "Attempts remaining: " + tries;
    return false;
  }
}

function trackGuesses() {
  document.querySelector('.guessedLetters').innerHTML = 'Letters guessed: ' + guessedLetters;
}

function setStatus() {
  if (checkMath() === true) {
    status = "Correct!";
    guessedLetters+=guess + ', ';
  } else {
    status = 'Nope! Try again.'
    tries--;
    document.querySelector('.triesCount').innerHTML = 'Attempts remaining: ' + tries;
    guessedLetters += guess + ", "
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
    document.querySelector('.statusHolder').innerHTML = status;
    document.querySelector('.submitGuess').disabled = true;
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
