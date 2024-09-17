function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function calculateFibonacciSum(n) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        const fibNumber = fibonacci(i);
        console.log(fibNumber);
        sum += fibNumber;
    }
    return sum;
}
const n = 10;
console.log(`Tổng của ${n} số Fibonacci đầu tiên là:`, calculateFibonacciSum(n));
//# sourceMappingURL=main.js.map