## Q1. Max Min of an Array
### Problem Description
-----------------------
Given an array A of size N. You need to find the sum of Maximum and Minimum element in the given array.


### Problem Constraints
-----------------------
1 <= N <= 10^5 \
-10^9 <= A[i] <= 10^9

### Input Format
-----------------------
First argument A is an integer array.

### Output Format
-----------------------
Return the sum of maximum and minimum element of the array

### Example Input
-----------------------
#### Input 1:
A = [-2, 1, -4, 5, 3]

#### Input 2:
A = [1, 3, 4, 1]

### Example Output
-----------------------
#### Output 1: 
1
#### Output 2:
5

### Example Explanation
-----------------------
#### Explanation 1:
Maximum Element is 5 and Minimum element is -4. (5 + (-4)) = 1. 

#### Explanation 2:
Factors of 10 are 1, 2, 5 and 10.

### Solution Aproach
We can loop through the array and find the maximum and minimum
element of the array. 
Finally, we return the sum of the above two elements

Time Complexity : O(N)

Space Complexity : O(1)
### Answer

```
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
```