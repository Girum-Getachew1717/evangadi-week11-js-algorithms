// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

// Examples
// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

// timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
// Notes
// Dates are zero based (see resources).
// All test cases contain valid dates.

function timeForMilkAndCookies (date){
return date.getMonth() === 11 && date.getDate()===24;
}

timeForMilkAndCookies(new Date(2013, 11, 24)) //➞ true

 timeForMilkAndCookies(new Date(2013, 0, 23)) //➞ false

 timeForMilkAndCookies(new Date(3000, 11, 24)) //➞ true


// Write a function called findLargest that takes an array of numbers and returns the largest number in the array.
// Examples:
// findLargest([3, 7, 2, 9, 4]);
// // 9

// findLargest([-5, -2, -10, -1]);
// // -1

// findLargest([100]);

//step 1 understand the problem
//step 2 solve it on paper
// step 3 general formula 
// step 4 pseudo code 
// compare two numbers and then holdes on the storage

// function findLargest (array){
//   let largest=[0];
//   for (let i = 0; i<array.lenght; i++){


//   }
// }













// //Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

function getOnlyEvens(array) {
    if (!Array.isArray(array)){
        return "Please Provide a valid array.";
    }
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0 && array[i] % 2 === 0) {
      result.push(array[i]);
      // result[result.lenght] = array[i];
    }
  }
  return result;
}
console.log(getOnlyEvens([1, 2, 3, 6, 4, 8])); // 4
console.log(getOnlyEvens([0, 1, 2, 3, 4])); //0, 2, 4

// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

//step 1 understand the problem
//step 2 solve it on paper
//72>27 "ok"
//step 3 create a general solution to apply step by step
//step 4 pseudo code
//   step-1 creat a function
//   step-2 convert number to string 72 to '72'
//   step-3 reverse the string "27"
//   step-4 convert it back to number 27
//   step-5 compare

function reverseCompare(num) {
  //convert to string, split, reverse, join
  let reversedStr = num.toString().split("").reverse().join("");

  //convert back to number
  let reversedNum = parseInt(reversedStr);

  //compare
  if (num > reversedNum) {
    console.log("Ok");
  } else {
    console.log("Not ok");
  }
}

reverseCompare(72); //ok
reverseCompare(23); //not ok

// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

function returnFactorial(n) {
  // factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  let result = 1;

  //loop from 1 to n and multiply
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}
console.log(returnFactorial(5)); // outputs 120
console.log(returnFactorial(6)); //outputs 720
console.log(returnFactorial(0)); // outputs 1
// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6

function CheckMeera(arr) {

  // go through each element
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    let double = n * 2;

    //check if double exists anywhere else in the array
    for (let j = 0; j < arr.length; j++) {
      //if it's the same position, skip it (so [0] is tricky)
      // if you want [0] to be meera, remove this i != j check
      if (i !== j && arr[j] === double) {
        console.log("I am NOT Meera array");
        return;
      }
    }
  }

  console.log("I am a Meera array");
}
console.log(CheckMeera([10, 4, 0, 5]))
console.log(CheckMeera(([7, 4, 9])));
console.log(CheckMeera([1, -6, 4, -3]));
// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.
function isDual(arr){
  for (let i = 0; i < arr.length; i++){
    let count = 0;
    for (let j = 0; j < arr.length; j++){
      if (arr[i] === arr[j]){
        count++;
      }
    }
    if (count !== 2 ){
      return 0;
    }
  }

  return 1;
}
console.log(isDual([1, 2, 1, 3, 3, 2]));
console.log(isDual([3, 1, 1, 2, 2]));

// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.

// function digitalClock(totalSeconds){
//   let hours = Math.floor(totalSeconds/3600)%24;
//   let minutes = Math.floor(totalSeconds/3600)%60;
//   let secs = totalSeconds%60;
// }


