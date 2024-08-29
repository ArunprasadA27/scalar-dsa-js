function PerfectNumber() {
    let x = 4;
    // console.log(`Count of perfect Number within ${x} is: `, CheckPerfectNumber(x));
    if (CheckPerfectNumber(x)) {
        console.log(`${x} is a PERFECT Number`)
    } else {
        console.log(`${x} is NOT a Perfect Number`)
    }
}

function CheckPerfectNumber(N) {
    let sum = 0;

    for (let i = 0; i < N; i++) {
        if (N % i === 0) {
            sum += i;
        }
    }
    if (N === sum) {
        return true;
    }
    return false;
}