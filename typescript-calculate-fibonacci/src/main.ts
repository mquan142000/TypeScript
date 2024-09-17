function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calculateFibonacciSum(n: number): number {
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

