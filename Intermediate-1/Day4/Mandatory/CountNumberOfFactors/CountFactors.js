function CountFactors() {
    console.log("No of factors : ", getFactors(10));
}

function getFactors(n) {
    let count = 0;
    for (let i = 0; i * i <= n; i++) {
        if (n % i == 0) {
            if (i == n / i) count = count + 1;
            else count = count + 2;
        }
    }
    return count;
}