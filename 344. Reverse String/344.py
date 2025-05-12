from typing import List


class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        length = len(s) // 2

        for i in range(length):
            s[i], s[len(s) - i - 1] = s[len(s) - i - 1], s[i]


if __name__ == '__main__':
    s = Solution()
    arr = ["h", "e", "l", "l", "o"]
    s.reverseString(arr)
    print(arr)
