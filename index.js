function hasTargetSum(array, target) {
  // Step 1: Sort the input array in ascending order.
  array.sort((a, b) => a - b);

  // Step 2: Initialize left and right pointers at the beginning and end of the array, respectively.
  let left = 0;
  let right = array.length - 1;

  // Step 3: While left < right:
  while (left < right) {
    // Step 3a: Calculate the sum of the numbers at positions left and right.
    const sum = array[left] + array[right];

    // Step 3b: If the sum is equal to the target, return true.
    if (sum === target) {
      return true;
    }

    // Step 3c: If the sum is less than the target, increment left.
    if (sum < target) {
      left++;
    }

    // Step 3d: If the sum is greater than the target, decrement right.
    if (sum > target) {
      right--;
    }
  }

  // Step 4: If no two numbers in the array add up to the target, return false.
  return false;
}

module.exports = hasTargetSum;

/* 
  Write the Big O time complexity of your function here
  O(nlogn) 
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
