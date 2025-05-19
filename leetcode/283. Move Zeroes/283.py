from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if len(nums) < 2:
            return

        zero = 0

        for i in range(len(nums)):
            if nums[i] != 0:
                nums[zero], nums[i] = nums[i], nums[zero]
                zero += 1


if __name__ == '__main__':
    s = Solution()
    arr = [1, 0, 3, 0, 12]
    s.moveZeroes(arr)
    print(arr)
