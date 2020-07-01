/******************
 * YOUR CODE HERE *
 ******************/

 const indexedChars = function(str) {
   let result = '';
  
  for (let i = 0; i < str.length; i++) {
     result = result + i + str[i];
   }   
   return result;
 }

 const exclaim = function(str) {
   result = '';

   for (let i = 0; i < str.length; i++) {
    
    if (str[i] !== "." && str[i] !== "?") {
       result = result + str[i];
     
      } else {
       result = result + "!";
     
      }
   }
   return result;
 }

const repeatIt = function(str, n) {
  result = '';

  for (let i = 0; i < n; i++) {
    result = result + str;
  }
  return result;
}

const truncate = function(str) {
  let result = '';

  for (let i = 0; i < 15; i++) {
    result = result + str[i];
    
    if (str.length >= 18) {
      result + "..."
    } else if (str.length < 18) {
      return str;

    }
    
  }
  return result + "...";
}

const ciEmailify = function(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    
    if (str[i] === " ") {
      result = result + ".";
    
    } else {
      result = result + str[i];
    }
  }
  return result.toLowerCase() + "@codeimmersives.com";
}

const reverse = function(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }

return result;
}


const onlyVowels = function(str) {
  result = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      result = result + str[i];

    } else if  (str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
      result = result + str[i];

    }
  }
  return result;
}

const numberedChars = function(str) {
  result = '';

  for (let i = 1; i < str.length; i++) {
    result = result + "(" + i + ")" + str[i];
  }
  return result;
}


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
