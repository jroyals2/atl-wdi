// Question 1
function maxOfTwoNumbers(x, y) {
    if (x > y){
        return x;
    }
    return y;
}

// Question 2
function maxOfThree(x, y, z) {
    if (x > y && x > z){
        return x;
    } else if (y > x && y > z) {
        return y;
    }
    return z;
}

// Question 3
function isCharacterAVowel(c) {
    var vowels = ['a','e','i','o','u','A','E','I','O','U' ];
    if (vowels.indexOf(c) !== -1) {
      return true;
    } 
    return false;
  }

// Question 4
function sumArray() {
    function sumArray(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
          sum = arr[i] + sum;
        }
        return sum;
      }
}


// Question 4
function multiplyArray() {
    function sumArray() {
        function sumArray(arr) {
            var product = 1;
            for (var i = 0; i < arr.length; i++) {
              product = arr[i] * product;
            }
            return product;
          }
    }

}


// Question 5
var numberOfArguments = function(){
  return argue.length;
}



// Question 6
var reverseString = function (str){
    const splitString = str.split("");
    const reverseSplit = splitString.reverse();
    const reverseString = reverseSplit.join("");
    return reverseString;
  };

// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
