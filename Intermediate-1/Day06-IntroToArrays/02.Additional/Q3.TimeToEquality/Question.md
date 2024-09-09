## Q3. Time to equality

### Problem Description
-----------------------
Given an integer array A of size N. In one second, you can increase the value of one element by 1. \
Find the minimum time in seconds to make all elements of the array equal.



### Problem Constraints
-----------------------
1 <= |A| <= 10^5 \
0 <= A[i] <= 10^9

### Input Format
-----------------------
The first argument is an integer array A.

### Output Format
-----------------------
Return the second largest element. If no such element exist then return -1.

### Example Input
-----------------------
#### Input 1:
```
A = [2, 1, 2] 

 ```

#### Input 2:
```
A = [2]
```

### Example Output
-----------------------
#### Output 1: 
```
1
```
#### Output 2:
```
-1
```

### Example Explanation
-----------------------
#### Explanation 1:
First largest element = 2 \
Second largest element = 1

#### Explanation 2:
There is no second largest element in the array.

### Hint 1
* You can loop through the array maintaining two variables:
    * largest: denoting the largest element in the array processed.
    * secondLargest: denoting the second largest element in the array processed.
* Try to find out the largest element, and then we can find the second largest using it.

### Solution Approach
* First, we iterate over each element in the list and find the largest element. Let’s say max_elem.
* Then, we again iterate over each element in the list using a for loop and find the largest element, but we also check if that element is equal to max_elem, if it is we skip it.

### Answer

```
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
        if (A[i] !== max && A[i] > smax) {
            smax = A[i];
        }
    }

    return smax === Number.NEGATIVE_INFINITY ? -1 : smax;
}
```
