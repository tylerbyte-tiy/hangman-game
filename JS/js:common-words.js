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

// var wordList = [];
//
// function getWord() {
//   answerWord = wordList[Math.floor(Math.random () * wordList.length)];
//   return answerWord;
// }

//   return commonWords[Math.floor(Math.random()*commonWords.length)];
// }
//
// var word = randomWord();
//
// function blanksFromAnswer ( thing ) {
//     var result = "";
//     for(var i=0; i<thing.length; i++){
//        result+= '_ ';
//      }
//     return result;
// }
// var underscore = blanksFromAnswer(word)

// document.getElementById("msg").textContent = underscore;

// function replaceAtIndex(character, word, index) {
//     var tempStr = "";
//
//     for (var n = 0; n < word.length; n++) {
//         if (n == index) {
//             tempStr += character;
//         } else {
//             tempStr += word[n];
//         }
//     }
//
//     return tempStr;
// }
//
// function alterAt ( n, c, originalString ) {
//     return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
// }
//
// function guessLetter( letter, shown, answer ) {
//     var checkIndex = 0;
//
//     checkIndex = answer.indexOf(letter);
//     while ( checkIndex >= 0 ) {
//         shown = alterAt( checkIndex, letter, shown );
//         checkIndex = answer.indexOf(letter, checkIndex + 1);
//     }
//     return shown;
// }
