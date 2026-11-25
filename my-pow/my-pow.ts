// 50. Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

function myPow(x: number, n: number): number {
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  if (n === 0) {
    return 1;
  }

  const half = myPow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
}


console.log(myPow(2.0, 10));