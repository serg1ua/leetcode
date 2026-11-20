# 1. Two Sum

# You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

def two_sum(nums: list[int], target: int) -> list[int]:
    num_map = {}

    for i, num_1 in enumerate(nums):
        num_2 = target - num_1
        if num_2 in num_map:
            return [num_map[num_2], i]
        else:
            num_map[num_1] = i
    return []

if __name__ == "__main__":
    nums = [3,2,4]
    target = 6
    print(two_sum(nums, target))