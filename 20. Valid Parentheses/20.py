class Solution:
    PARS = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    def isValid(self, s: str) -> bool:
        stack = []

        for par in s:
            if par not in self.PARS.keys():
                if len(stack) == 0:
                    return False

                last = stack.pop()
                if self.PARS[last] != par:
                    return False
                continue

            stack.append(par)
        return len(stack) == 0

if __name__ == '__main__':
    s = Solution()
    print(s.isValid("([])"))