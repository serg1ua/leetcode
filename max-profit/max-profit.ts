// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = prices.splice(0, 1)[0];

  for (const p of prices) {
    if (minPrice > p) {
      minPrice = p;
    } else if (p - minPrice > maxProfit) {
      maxProfit = p - minPrice;
    }
  }

  return maxProfit;
}

const prices = [7, 1, 5, 3, 0.9, 4];
console.log(maxProfit(prices));
