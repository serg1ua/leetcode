// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1.Open brackets must be closed by the same type of brackets.
// 2.Open brackets must be closed in the correct order.
// 3.Every close bracket has a corresponding open bracket of the same type.

function isValid(s: string): boolean {
  const pairs: Record<string, string> = { ")": "(", "}": "{", "]": "[" };
  const stack = [];

  for (const char of s) {
    if (pairs.hasOwnProperty(char)) {
      if (!stack.length || pairs[char] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return !stack.length;
}

const s = "()[]{}";
console.log(isValid(s));
