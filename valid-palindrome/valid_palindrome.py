# 125. Valid Palindrome

# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
# and removing all non-alphanumeric characters, it reads the same forward and backward.
# Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

def is_palindrome(s: str) -> bool:
    start, end = 0, len(s) - 1

    while start < end:
        if not s[start].isalnum():
            start += 1
            continue
        if not s[end].isalnum():
            end -= 1
            continue

        if s[start].lower() != s[end].lower():
            return False

        start += 1
        end -= 1

    return True

if __name__ == "__main__":
    s = "A man, a plan, a canal: Panama"
    print(is_palindrome(s))