## Q5. Good Pair

### Problem Description
-----------------------
Given an integer array A of size N and an integer B, you have to return the same array after rotating it B times towards the right.

### Problem Constraints
-----------------------
1 <= N <= 10^5 \
1 <= A[i] <=10^9 \
1 <= B <= 10^9

### Input Format
-----------------------
First argument is an integer array A.\
Second argument is an integer B.

### Output Format
-----------------------
Return 1 if good pair exist otherwise return 0.

### Example Input
-----------------------
#### Input 1:
```
A = [1, 2, 3, 4]
B = 7
```

#### Input 2:
```
A = [1,2,4]
B = 4
```

#### Input 3:
```
A = [1,2,2]
B = 4
```

### Example Output
-----------------------
#### Output 1: 
```
1
```
#### Output 2:
```
0
```
#### Output 3:
```
1
```

### Example Explanation
-----------------------
#### Explanation 1:
 (i,j) = (3,4)

#### Explanation 2:
No pair has sum equal to 4.

#### Explanation 2:
(i,j) = (2,3)


### Hint 1
Let's say the given array is - [1, 2, 3, 4, 5, 6, 7] and we have to rotate it by 3. 
So, after rotation, it should look like this - [5, 6, 7, 1, 2, 3, 4].
Try to observe what is happening over here? 
Last 3 elements are being shifted in the front and remaining first elements are shifted towards the last. 
Is it something similar to reversing an array? 

[1, 2, 3, 4, 5, 6, 7] After reversing it => [7, 6, 5, 4, 3, 2, 1]
Now, think on the order of first 3 elements and order of remaining elements. 

### Solution Approach
Let n be the length of the array.
Rotating an array by n and 2 * n times gives the same results, i.e., rotating i or i % n times is the same.
So, we update B to B % n.

When we rotate the array B times, B elements from the back end of the array come to the front 
and the rest of the elements from the front shift backward.

In this approach, we firstly reverse all the elements of the array. 
Then, reversing the first B elements followed by reversing the rest N - B elements gives us the required result.

Time Complexity : O(N)
Space Complexity : O(1)

### Answer

```
function ArrayRotation() {
    // Input 1
    // let A = [1, 2, 3, 4]
    // let B = 2

    //Input 2
    let A = [7, 4, 2, 10, 5]
    let B = 5

    let result = getArrayRotation(A, B);
    console.log(`Rotated array after ${B} times : ${result}`);
}

function getArrayRotation(A, B) {

    B = B % A.length;

    let reverseA = getArrayReverse(A, 0, A.length - 1);
    let rev1 = getArrayReverse(reverseA, 0, B - 1);
    let rev2 = getArrayReverse(rev1, B, A.length - 1);
    return rev2;
}

function getArrayReverse(A, B, C) {
    let left = B, right = C;
    while (left < right) {
        let temp = A[left];
        A[left] = A[right];
        A[right] = temp;
        left++;
        right--;
    }
    return A;
}
```
