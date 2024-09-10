function timeToEquality() {
    let A = [2, 4, 1, 3, 2] // Output shoud be 8

    let result = getTimeToEquality(A);
    if (result > 0) {
        console.log(`Time to equality ${result}`);
    }
}

function getTimeToEquality(A) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i];
        }
    }

    let count = 0;
    for (let i = 0; i < A.length; i++) {
        count = count + (max - A[i]);
    }
    return count;
}