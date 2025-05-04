from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        left = 0
        right = len(nums) - 1

        while left < right:
            summ = nums[left] + nums[right]

            if summ == target:
                return [left, right]

            if summ < target:
                left += 1
            elif summ > target:
                right -= 1

        return []

if __name__ == '__main__':
    s = Solution()
    print(s.twoSum([2,7,11,15], 9))
