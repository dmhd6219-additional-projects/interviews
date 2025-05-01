from typing import List, Tuple


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        lcp = ''
        for tup in list(zip(*strs)):
            if len(set(tup)) != 1:
                break
            lcp += tup[0]
        return lcp


if __name__ == '__main__':
    s = Solution()
    print(s.longestCommonPrefix(["flower","flow","flight"]))
