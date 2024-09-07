## Q2. Second Largest

### Problem Description
-----------------------
You are given an integer array A. You have to find the second largest element/value in the array or report that no such element exists.

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
