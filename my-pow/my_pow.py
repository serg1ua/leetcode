# 50. Pow(x, n)

# Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

def my_pow(x: float, n: int) -> float:
    if n < 0:
        return 1 / my_pow(x, -n)
    if n == 0:
        return 1

    half = my_pow(x, n // 2)
    if n % 2 == 0:
        return half * half
    else:
        return half * half * x

if __name__ == '__main__':
    print(my_pow(2.0, 10))