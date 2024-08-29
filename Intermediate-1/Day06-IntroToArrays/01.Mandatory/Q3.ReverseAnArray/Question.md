## Q3. Reverse in a range
### Problem Description
-----------------------
Given an array A of N integers and also given two integers B and C. Reverse the elements of the array A within the given inclusive range [B, C].


### Problem Constraints
-----------------------
1 <= N <= 10^5 \
1 <= A[i] <= 10^9 \
0 <= B <= C <= N - 1

### Input Format
-----------------------
The first argument A is an array of integer. \
The second and third arguments are integers B and C

### Output Format
-----------------------
Return the array A after reversing in the given range.

### Example Input
-----------------------
#### Input 1:
```
A = [1, 2, 3, 4]
B = 2
C = 3
```

#### Input 2:
```
A = [2, 5, 6]
B = 0
C = 2
```

### Example Output
-----------------------
#### Output 1: 
```
[1, 2, 4, 3]
```
#### Output 2:
```
[6, 5, 2]
```

### Example Explanation
-----------------------
#### Explanation 1:
We reverse the subarray [3, 4]. 

#### Explanation 2:
We reverse the entire array [2, 5, 6].

### Hint 1
We need to reverse the subarray [A[B], A[B+1], A[B+2] .... , A[C]].
After reversing, the subarray should look like this - 
[A[C], .... A[B+2], A[B+1], A[B]]
Try to solve this in  linear time complexity.

### Hint 2
We can initialise two variable i and j with B and C.
We will iterate till i < j, swapping A[i] and A[j]
in every step and then incrementing i and decrementing j.

Time Complexity : O(N)
Space Complexity : O(1)

### Answer

```
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
```
