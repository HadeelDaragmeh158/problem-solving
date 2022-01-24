'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr) => {
    let max;
    let i = 0
    max = arr[i];
    // write your code here
    for (i; i < arr.length; i++) {
        if (max >= arr[i])
            continue;
        else
            max = arr[i];
    }

    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr) => {
    let sum;
    let x;
    // write your code here


     sum = arr.reduce((acc, el) => acc + (typeof el === "number" ? el : 0));
   

    // for (let i=0; i < arr.length-1; i++) {
    //     x = arr[i] | 0;
    //     sum += x;
    //     // sum+=Number(arr[i]);
    // }
    return sum;
}

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr) => {
    // write your code here
    var output = [];
    while (arr.length) {
      output.push(arr.pop());
    }
  
    return output;
  }
    // length = array.length
    // newArray = [];
    // for (let i = length - 1; i > -1; i--) {

    //     newArray.push(array[i])

    //
 
    

module.exports = { findMax, sumNums, reverseArray };