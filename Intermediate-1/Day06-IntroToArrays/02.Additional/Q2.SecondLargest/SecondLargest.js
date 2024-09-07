function secondLargest() {
    // let A = [1, 1, 1];

    let A = [1, 2, 3, 5, 6, 7, 8, 5, 4, 5];

    let result = getSecondLargest(A);
    if (result > 0) {
        console.log(`Second largest value us ${result}`);
    } else {
        console.log(`There is no second largest value present!!!`);
    }
}

function getSecondLargest(A) {
    let max = A[0];
    for (let i = 1; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i];
        }
    }

    let smax = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < A.length; i++) {
        if (A[i] != max && A[i] > smax) {
            smax = A[i];
        }
    }

    return smax == Number.NEGATIVE_INFINITY ? -1 : smax;
}