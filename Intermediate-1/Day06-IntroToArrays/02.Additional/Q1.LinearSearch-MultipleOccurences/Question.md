## Q1. Linear Search - Multiple Occurences

### Problem Description
-----------------------
Given an array A and an integer B, find the number of occurrences of B in A.

### Problem Constraints
-----------------------
1 <= B, Ai <= 10^9 \
1 <= length(A) <= 10^5

### Input Format
-----------------------
Given an integer array A and an integer B. \


### Output Format
-----------------------
Return an integer, number of occurrences of B in A.

### Example Input
-----------------------
#### Input 1:
```
 A = [1, 2, 2], B = 2 
 ```

#### Input 2:
```
 A = [1, 2, 1], B = 3 
```

### Example Output
-----------------------
#### Output 1: 
```
2
```
#### Output 2:
```
0
```

### Example Explanation
-----------------------
#### Explanation 1:
Element at index 2, 3 is equal to 2 hence count is 2.

#### Explanation 2:
There is no element equal to 3 in the array.



### Hint 1
We can iterate through the array and check if the current element is equal to the required value, if it is then we can just increase the count.

### Solution Approach
* Initialize a variable ans with 0
* Iterate for i=0 to N-1
* Check if A[i] = B then increment ans by 1 every time

### Answer

```
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
```
