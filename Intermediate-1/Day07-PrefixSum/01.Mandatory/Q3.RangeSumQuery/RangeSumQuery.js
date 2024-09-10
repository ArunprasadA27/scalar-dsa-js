function rangeSumQuery() {
    let A = [1, 2, 3, 4, 5];
    let B = [[0, 3], [1, 2]]; // output will be 10, 5

    let result = getRangeSumQuery(A, B);
    console.log(`Result array ${result}`)
}

function getRangeSumQuery(A, B) {
    let pfSum = getPrefixSumArray(A);
    let result = [];

    for (let el of B) {
        let left = el[0];
        let right = el[1];
        let sum = 0;

        if (left == 0) {
            sum = pfSum[right];
        } else {
            sum = pfSum[right] - pfSum[left - 1];
        }
        result.push(sum);
    }
    return result;
}

function getPrefixSumArray(A) {
    let pfSum = [];
    pfSum[0] = A[0];

    for (let i = 1; i < A.length; i++) {
        pfSum[i] = pfSum[i - 1] + A[i];
    }

    console.log(`Prefix sum ${pfSum}`);
    return pfSum;
}