// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

function moveZeroes(nums: number[]): void {
  let current = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      [nums[current], nums[i]] = [nums[i], nums[current]];
      current++;
    }
  }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);

console.log(nums); // [0, 1, 0, 3, 12] -> [1, 3, 12, 0, 0])

export { };