function CheckIsPrime() {
    // Change the value of x to find prime number or not
    let x = 17;

    if (IsPrime(x)) {
        console.log(`${x} is a prime number!!!`);
    } else {
        console.log(`${x} is NOT a prime number!!!`);
    }
}
function IsPrime(x) {
    let factorCount = 0;

    for (let i = 0; i * i <= x; i++) {
        if (x % i == 0) {
            if (i === x / i) {
                factorCount += 1;
            } else {
                factorCount += 2;
            }
        }
    }
    if (factorCount === 2) {
        return true;
    }
    return false;
}