function CountNoOfPrimes(x){
    let isPrime = (x) => {
        let count = 0;
    
        for(let i=0; i*i<=x; i++){
            if(x % i === 0){
                if( x / i === i){
                    count = count + 1;
                } else {
                    count = count + 2;
                }
            }
        }
        if(count === 2){
            return true;
        } else {
            return false;
        }
    }
    
    let primeCount = 0;
    
    for(let i=2; i<=A; i++){
        if(isPrime(i)){
            primeCount += 1;
        }
    }
}

