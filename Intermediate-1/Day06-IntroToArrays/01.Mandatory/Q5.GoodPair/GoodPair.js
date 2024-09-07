function GoodPair() {
    // Input 1
    // let A = [1, 2, 3, 4]
    // let B = 7

    //Input 2
    // let A = [1, 2, 4]
    // let B = 4

    //Input 3
    let A = [1, 2, 2]
    let B = 4

    let result = getGoodPair(A, B);
    if (result) {
        console.log(`Array has ${B} in it!!!`);
    } else {
        console.log(`Array has NO ${B} in it!!!`);
    }
}

function getGoodPair(A, B) {
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            if (A[i] + A[j] === B && i != j) {
                return true;
            }
        }
    }
    return false;
}

