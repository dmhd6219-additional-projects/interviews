from collections import defaultdict
from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_map = defaultdict(list)
        for i in range(len(nums)):
            nums_map[nums[i]].append(i)

        for num in nums_map.keys():
            if (target - num) in nums_map.keys():

                if target - num == num:
                    if len(nums_map[target - num]) > 1:
                        return [nums_map[target - num][0], nums_map[target - num][1]]
                    continue

                return [nums_map[num][0], nums_map[target - num][0]]


if __name__ == '__main__':
    s = Solution()
    print(s.twoSum([3, 2, 4], 6))
