# 26. Remove Duplicates from Sorted Array
#
# Given an integer array nums sorted in non-decreasing order,
# remove the duplicates in-place such that each unique element appears only once.
# The relative order of the elements should be kept the same.
#
# Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​.
# After removing duplicates, return the number of unique elements k.
# The first k elements of nums should contain the unique numbers in sorted order.
# The remaining elements beyond index k - 1 can be ignored.

def remove_duplicates(nums: list[int]) -> int:
    curr = 0
    length = len(nums)

    for next in range(1, length):
        if nums[curr] != nums[next]:
            nums[curr + 1] = nums[next]
            curr += 1
    return curr + 1

if __name__ == '__main__':
    nums = [0,0,1,1,1,2,2,3,3,4]
    print(remove_duplicates(nums))
