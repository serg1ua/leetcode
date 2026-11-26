// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s: string): boolean {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    const startChar = s[start].toLowerCase();
    const endChar = s[end].toLowerCase();
    if (!/^[a-z0-9]+$/.test(startChar)) {
      start += 1;
      continue;
    }
    if (!/^[a-z0-9]+$/.test(endChar)) {
      end -= 1;
      continue;
    }

    if (startChar !== endChar) {
      return false;
    }

    start += 1;
    end -= 1;
  }

  return true;
}


const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));