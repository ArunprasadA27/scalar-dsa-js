function ArrayRotation() {
    // Input 1
    // let A = [1, 2, 3, 4]
    // let B = 2

    //Input 2
    let A = [7, 4, 2, 10, 5]
    let B = 5

    let result = getArrayRotation(A, B);
    console.log(`Rotated array after ${B} times : ${result}`);
}

function getArrayRotation(A, B) {

    B = B % A.length;

    let reverseA = getArrayReverse(A, 0, A.length - 1);
    let rev1 = getArrayReverse(reverseA, 0, B - 1);
    let rev2 = getArrayReverse(rev1, B, A.length - 1);
    return rev2;
}

function getArrayReverse(A, B, C) {
    let left = B, right = C;
    while (left < right) {
        let temp = A[left];
        A[left] = A[right];
        A[right] = temp;
        left++;
        right--;
    }
    return A;
}