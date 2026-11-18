# 121. Best Time to Buy and Sell Stock

# You are given an array prices where prices[i] is the price of a given stock on the ith day.
# You want to maximize your profit by choosing a single day to buy one stock
# and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction.
# If you cannot achieve any profit, return 0.

def max_profit(prices: list[int]) -> int:
    max_profit = 0
    min_price = prices[0]

    for p in prices[1:]:
        if min_price > p:
            min_price = p
        else:
            profit = p - min_price
            max_profit = profit if profit > max_profit else max_profit

    return max_profit

if __name__ == '__main__':
    prices = [7,1,5,3,0.9,4]
    print(max_profit(prices))