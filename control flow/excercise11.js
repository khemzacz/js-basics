
showPrimes(20);

function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(number) {
        for (let j = 2; j < number; j++) {
            if (number % j === 0) {
                return false;
            }
        }
    return true;
}