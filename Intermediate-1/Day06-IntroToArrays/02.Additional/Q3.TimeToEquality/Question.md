## Q3. Time to equality

### Problem Description
-----------------------
Given an integer array A of size N. In one second, you can increase the value of one element by 1. \
Find the minimum time in seconds to make all elements of the array equal.



### Problem Constraints
-----------------------
1 <= N <= 1000000 \
1 <= A[i] <= 1000

### Input Format
-----------------------
First argument is an integer array A.

### Output Format
-----------------------
Return an integer denoting the minimum time to make all elements equal.

### Example Input
-----------------------
#### Input 1:
```
A = [2, 4, 1, 3, 2]
 ```


### Example Output
-----------------------
#### Output 1: 
```
8
```

### Example Explanation
-----------------------
#### Explanation 1:
We can change the array A = [4, 4, 4, 4, 4]. The time required will be 8 seconds.


### Hint 1
* Since we can only increase the element by 1, we should increase all elements up to the maximum element.



### Solution Approach
* We can find the maximum element, and for finding the minimum number of moves, we should find the summation of the absolute difference of all 
elements with the maximum element.

### Answer

```
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
```
