/**
 * 344. Reverse String
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */

function reverseString(s: Array<unknown>): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];

    left += 1;
    right -= 1;
  }
}

const str = ["h", "e", "l", "l", "o"];
reverseString(str);
console.log(str);
