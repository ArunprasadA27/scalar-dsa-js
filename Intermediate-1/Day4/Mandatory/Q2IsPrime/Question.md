## Q2. IsPrime

### Problem Description
-----------------------
Given a number A. Return 1 if A is prime and return 0 if not. 

Note : 
The value of A can cross the range of Integer.

### Problem Constraints
-----------------------
`1 <= A <= 10^9`

### Input Format
-----------------------
The first argument is a single integer A.

### Output Format
-----------------------
Return 1 if A is prime else return 0.

### Example Input
-----------------------
#### Input 1:
A = 5

#### Input 2:
A = 10


### Example Output
-----------------------
#### Output 1: 
1
#### Output 2:
0

### Example Explanation
-----------------------
#### Explanation 1:
5 is a prime number.

#### Explanation 2:
10 is not a prime number.

## Answer

```
function CheckIsPrime() {
    // Change the value of x to find prime number or not
    let x = 17;

    if (IsPrime(x)) {
        console.log(`${x} is a prime number!!!`);
    } else {
        console.log(`${x} is NOT a prime number!!!`);
    }
}
function IsPrime(x) {
    let factorCount = 0;

    for (let i = 0; i * i <= x; i++) {
        if (x % i == 0) {
            if (i === x / i) {
                factorCount += 1;
            } else {
                factorCount += 2;
            }
        }
    }
    if (factorCount === 2) {
        return true;
    }
    return false;
}
```


