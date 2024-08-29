## Q5. Find Number of Iterations - 9 - Objective

### Find the total number of iterations in the following code snippet:

NOTE: ^ denotes power, not Bitwise XOR.

```
for (int i = 1; i <= n; i++)
{
    for (int j = 1; j <= 3 ^ i; j++)
    {
        print(i + j);
    }
}
```

### Answer
3^1 + 3^2 + 3^3 + 3^4 + …… + 3^n times.
Hence option B.





