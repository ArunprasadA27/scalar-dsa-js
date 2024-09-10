## Q5. Count of elements

### Problem Description
-----------------------
Given an array A of N integers. 
Count the number of elements that have at least 1 elements greater than itself.


### Problem Constraints
-----------------------
1 <= N <= 10^5 \
1 <= A[i] <= 10^9

### Input Format
-----------------------
First and only argument is an array of integers A.

### Output Format
-----------------------
Return the count of elements.

### Example Input
-----------------------
#### Input 1:
```
A = [3, 1, 2]
```
#### Input 2:
```
A = [5, 5, 3]
```


### Example Output
-----------------------
#### Output 1: 
```
2
```
#### Output 2: 
```
1
```

### Example Explanation
-----------------------
#### Explanation 1:
The elements that have at least 1 element greater than itself are 1 and 2

#### Explanation 2:
The elements that have at least 1 element greater than itself is 3



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
function countOfElements() {
    let A = [5, 5, 3] // Output shoud be 8

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
```
