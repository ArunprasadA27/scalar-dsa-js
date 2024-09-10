## Q3. Range Sum Query

### Problem Description
-----------------------
You are given an integer array A of length N.\
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query. \
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed). \
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

### Problem Constraints
-----------------------
1 <= N, M <= 10^5 \
1 <= A[i] <= 10^9 \
0 <= L <= R < N

### Input Format
-----------------------
The first argument is the integer array A. \
The second argument is the 2D integer array B.

### Output Format
-----------------------
Return an integer array of length M where ith element is the answer for ith query in B.

### Example Input
-----------------------
#### Input 1:
```
A = [1, 2, 3, 4, 5]
B = [[0, 3], [1, 2]]
```
#### Input 2:
```
A = [2, 2, 2]
B = [[0, 0], [1, 2]]
```


### Example Output
-----------------------
#### Output 1: 
```
[10, 5]
```
#### Output 2: 
```
[2, 4]
```

### Example Explanation
-----------------------
#### Explanation 1:
The sum of all elements of A[0 ... 3] = 1 + 2 + 3 + 4 = 10. \
The sum of all elements of A[1 ... 2] = 2 + 3 = 5.

#### Explanation 2:
The sum of all elements of A[0 ... 0] = 2 = 2. \
The sum of all elements of A[1 ... 2] = 2 + 2 = 4.



### Hint 1
* Which elements do not have at least 1 elements greater than itself?
* Only elements that are equal to the maximum value of the array do not
satisfy this.
* Try to solve the problem in O(N) time complexity.

### Solution Approach
* We need to count the number of elements in the array 
that are not equal to the maximum value of the array.
We can traverse the array and get this count.

* Time Complexity : O(N) \
Space Complexity : O(1)

### Answer

```
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
```
