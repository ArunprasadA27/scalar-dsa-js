<details>
<summary>Q1. Max Min of an Array</summary>

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
</details>

<details>
<summary> Q3. Reverse in a range</summary>

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
</details>
<details>
<summary> Q4. Array Rotation</summary>

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
The first argument given is the integer array A.\
The second argument given is the integer B.

### Output Format
-----------------------
Return the array A after rotating it B times to the right

### Example Input
-----------------------
#### Input 1:
```
A = [1, 2, 3, 4]
B = 2
```

#### Input 2:
```
A = [2, 5, 6]
B = 1
```

### Example Output
-----------------------
#### Output 1: 
```
[3, 4, 1, 2]
```
#### Output 2:
```
[6, 2, 5]
```

### Example Explanation
-----------------------
#### Explanation 1:
Rotate towards the right 2 times - [1, 2, 3, 4] => [4, 1, 2, 3] => [3, 4, 1, 2]

#### Explanation 2:
Rotate towards the right 1 time - [2, 5, 6] => [6, 2, 5]

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
</details>
<details>
<summary> Q5. Good pair</summary>

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
function GoodPair() {
    // Input 1
    // let A = [1, 2, 3, 4]
    // let B = 7

    //Input 2
    // let A = [1, 2, 4]
    // let B = 4

    //Input 3
    let A = [1, 2, 2]
    let B = 4

    let result = getGoodPair(A, B);
    if (result) {
        console.log(`Array has ${B} in it!!!`);
    } else {
        console.log(`Array has NO ${B} in it!!!`);
    }
}

function getGoodPair(A, B) {
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            if (A[i] + A[j] === B && i != j) {
                return true;
            }
        }
    }
    return false;
}


```
</details> 
<details>
<summary>Q1. Linear Search - Multiple Occurences
{Additional Problems}</summary>

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
</details>
<details>
<summary>Q2. Second largest in an array </summary>

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
</details>