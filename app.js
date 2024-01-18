"use strict";
// function removeElement(nums, val) {
//   let k = 0; // Represents the count of elements not equal to val

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// }

// // Example usage:
// let nums = [3, 2, 2, 3];
// let val = 3;
// let result = removeElement(nums, val);

// console.log(result);
// console.log(nums.slice(0, result));
function removeElement(nums, val) {
  let k = 0; // Represents the count of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      if (i !== k) {
        nums[k] = nums[i];
      }
      k++;
    }
  }

  return k;
}

// Example usage:
let nums = [3, 2, 2, 3];
let val = 3;
let result = removeElement(nums, val);

console.log(result); // Output: 2
console.log(nums.slice(0, result)); // Elements not equal to val: [2, 2]
