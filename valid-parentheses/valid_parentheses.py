# 20. Valid Parentheses

# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:
# 1.Open brackets must be closed by the same type of brackets.
# 2.Open brackets must be closed in the correct order.
# 3.Every close bracket has a corresponding open bracket of the same type.

def is_valid(s: str) -> bool:
    pairs = {')': '(', '}': '{', ']': '['}
    stack = []

    for char in s:
        if char in pairs:
            if not stack or pairs[char] != stack.pop():
                return False
        else:
            stack.append(char)
    return not stack

if __name__ == '__main__':
    s = "()[]{}"
    print(is_valid(s))