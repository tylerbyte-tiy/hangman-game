/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
  return document.querySelector('.guessLetter').value;
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
    document.querySelector('.triesCount').innerHTML = "Tries: " + tries;
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
    document.querySelector('.triesCount').innerHTML = 'Tries: ' + tries;
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const hangman = __webpack_require__(0);

hangman.getWord();
hangman.setAnswerWord();
hangman.setProgress();
hangman.showProgress();
hangman.inputGuess();
hangman.setGuess();
hangman.updateGuess();
hangman.checkMath();


/***/ })
/******/ ]);