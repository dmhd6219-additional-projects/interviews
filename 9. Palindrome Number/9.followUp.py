class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False

        old_number = x
        new_number = 0
        while x > 0:
            new_number = new_number * 10 + x % 10
            x //= 10

        return old_number == new_number


if __name__ == '__main__':
    s = Solution()
    print(s.isPalindrome(121))
