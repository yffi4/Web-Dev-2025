let number = 10;
nextPrime:
for(let i = 2; i <= number; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0) continue nextPrime;
    }
    alert(i);
}