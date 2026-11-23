# 283. Move Zeroes

# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
# Note that you must do this in-place without making a copy of the array.

def move_zeroes(nums: list[int]) -> None:
    current = 0

    for index, number in enumerate(nums):
        if number != 0:
            nums[current], nums[index] = nums[index], nums[current]
            current += 1

if __name__ == '__main__':
    nums = [0,1,0,3,12]
    move_zeroes(nums)

    print(nums) # [0, 1, 0, 3, 12] -> [1, 3, 12, 0, 0]