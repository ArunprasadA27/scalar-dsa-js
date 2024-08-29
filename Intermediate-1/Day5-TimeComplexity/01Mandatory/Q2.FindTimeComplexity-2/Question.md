## Q2. Find Time Complexity - 2 - Objective

### What is the time complexity of the following code snippet

```
static void solve(int N, int M) {
    for (int i = 1; i <= N; i++) {
        if (N % i == 0)
            System.out.println(i);
    }
    for (int i = 1; i <= M; i++) {
        if (M % i == 0)
            System.out.println(i);
    }
}
```

### Answer
O(N+M)
