function countOfElements() {
    let A = [3, 1, 2]

    let result = getCountOfElements(A);
    if (result > 0) {
        console.log(`No of elements which are greater than itself in the array : ${result}`);
    }
}

function getCountOfElements(A) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i];
        }
    }

    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] != max) {
            count += 1;
        }
    }

    return count;
}