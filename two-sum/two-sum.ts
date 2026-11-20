// 1. Two Sum

// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums: number[], target: number): number[] {
  const numMap: Record<number, number> = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const num1 = nums[i];
    const num2 = target - num1;
    if (numMap.hasOwnProperty(num2)) {
      return [numMap[num2], i];
    } else {
      numMap[num1] = i;
    }
  }
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
