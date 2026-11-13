// 26. Remove Duplicates from Sorted Array
//
// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
//
// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​.
// After removing duplicates, return the number of unique elements k.
// The first k elements of nums should contain the unique numbers in sorted order.
// The remaining elements beyond index k - 1 can be ignored.

function removeDuplicates(nums: Array<number>): number {
  let curr = 0;
  const len = nums.length;

  for (let i = 1; i < len; i++) {
    if (nums[curr] !== nums[i]) {
      nums[curr + 1] = nums[i];
      curr += 1;
    }
  }
  return curr + 1;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);
