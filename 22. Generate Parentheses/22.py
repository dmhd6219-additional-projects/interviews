from itertools import product
from typing import List


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:

        def dfs(left: int, right: int, s: str):
            if len(s) == n * 2:
                ans.append(s)
                return
            if left < n:
                dfs(left + 1, right, s + "(")
            if right < left:
                dfs(left, right + 1, s + ")")

        ans = []
        dfs(0, 0, "")
        return ans


if __name__ == '__main__':
    s = Solution()
    print(s.generateParenthesis(3))
