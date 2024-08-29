function ReverseArrayInRange() {
    // Input 1
    // let A = [1, 2, 3, 4]
    // let B = 2
    // let C = 3

    //Input 2
    let A = [2, 5, 6]
    let B = 0
    let C = 2

    let result = getReverseArrayInRange(A, B, C);
    console.log(`Reversed array in the given idex : ${A}`);
}

function getReverseArrayInRange(A, B, C) {
    let left = B, right = C;
    while (left < right) {
        let temp = A[left];
        A[left] = A[right];
        A[right] = temp;
        left++;
        right--;
    }
}