function MaxMinArray() {
    // let A = [1, 3, 4, 1];

    let A = [-2, 1, -4, 5, 3]

    let result = getMaxMinArray(A);
    console.log(`Sum of max & min is : ${result}`);
}

function getMaxMinArray(A) {
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;

    for (let i = 0; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i];
        }
        if (A[i] < min) {
            min = A[i];
        }
    }
    return max + min;
}