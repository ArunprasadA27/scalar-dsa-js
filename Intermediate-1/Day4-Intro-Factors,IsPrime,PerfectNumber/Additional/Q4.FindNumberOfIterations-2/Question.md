## Q4. Find Number of Iterations - 2- Objective


### Find the total number of iterations in the following code:

```
void solve(int N, int M)
{
    int count = 0;
    for (int i = 1; i <= N; i++)
    {

        if (N % i == 0)
            count++;
    }

    for (int i = 1; i <= M; i++)
    {

        if (M % i == 0)
            count++;
    }
    print count;
}
```

### Answer
N + M






