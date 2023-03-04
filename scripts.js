// function sum(a, b) {
//   return a + b;
// }

function capitalize(str) {
  if (str === "") {
    return "This is an empty string";
  } else {
    if (typeof str === "string" || str instanceof String) {
      let lowerStr = str.toLowerCase();
      let newStr = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
      return newStr;
    } else return "This is not a string";
  }
}

function reverse(str) {
  if (str === "") {
    return "This is an empty string";
  } else {
    if (typeof str === "string" || str instanceof String) {
      let newStr = str.split("").reverse().join("");
      return newStr;
    } else return "This is not a string";
  }
}

function caesarChiper(str, key) {
  let cipherText = '';
  for(let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);

      let isAnUpperCaseLetter = charCode >= 65 && charCode <= 90;
      let isALowerCaseLetter = charCode >= 97 && charCode <= 122;

      //determine if character is a letter
      if(isAnUpperCaseLetter || isALowerCaseLetter) {
          //do the shift
          key = key % 26; 
          
          let cipherLetterCharCode = charCode + key;

          if(isAnUpperCaseLetter) {
              if(cipherLetterCharCode > 90) {
                  cipherLetterCharCode = 64 + cipherLetterCharCode - 90;
              } else if(cipherLetterCharCode < 65) {
                  cipherLetterCharCode = 90 - (64 - cipherLetterCharCode);
              }
          } else if(isALowerCaseLetter) {
              if(cipherLetterCharCode > 122) {
                  cipherLetterCharCode = 96 + cipherLetterCharCode - 122;
              } else if(cipherLetterCharCode < 97) {
                  cipherLetterCharCode = 122 - (96 - cipherLetterCharCode);
              }
          }
          cipherText = cipherText.concat(String.fromCharCode(cipherLetterCharCode));
      } else {
          cipherText = cipherText + (str.charAt(i));
      }
  }
  
  return cipherText;
}


function analyzeArray(arr) {
    if(arr == undefined) {
      throw "invalid input";
  }

  arr.forEach(element => {
      if(isNaN(element)) {
          throw "invalid input";
      }    
  });
  const arrLength = arr.length;

  if(arrLength == 0) {
      throw "array is empty";
  }

  const sum = arr.reduce((a, b) => a + b, 0);
  arr.sort(function(a, b){return a - b});

  return {
      average: sum/arrLength,
      min: arr[0],
      max: arr[arrLength - 1],
      length: arrLength
  }
}



module.exports = { capitalize, reverse, caesarChiper, analyzeArray };
