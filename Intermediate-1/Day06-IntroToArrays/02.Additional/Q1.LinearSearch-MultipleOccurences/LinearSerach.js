function linearSearch() {
    // let A = [1, 2, 1];
    // let B = 3;

    let A = [1, 2, 3, 5, 6, 7, 8, 5, 4, 5];
    let B = 5;


    let result = getLinearSearch(A, B);
    console.log(`No of occurences of ${B} is, ${result}`);

}

function getLinearSearch(A, B) {
    let count = 0;
    for (let i = 0; i <= A.length - 1; i++) {
        if (A[i] == B) {
            count += 1;
        }
    }
    return count;
}