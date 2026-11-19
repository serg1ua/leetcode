// 150. Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

function evalRPN(tokens: Array<string>): number {
  const stack: number[] = [];
  const operators = ["+", "-", "*", "/"];

  for (const token of tokens) {
    if (!operators.includes(token)) {
      stack.push(Number.parseInt(token));
    } else {
      const second = stack.length ? (stack.pop() as number) : 0;
      const first = stack.length ? (stack.pop() as number) : 0;

      let res = 0;
      switch (token) {
        case "+":
          res = first + second;
          break;
        case "-":
          res = first - second;
          break;
        case "*":
          res = first * second;
          break;
        case "/":
          res = first / second;
          break;
      }
      stack.push(Number.parseInt(res.toString()));
    }
  }
  return stack.pop() as number;
}

const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(tokens));
