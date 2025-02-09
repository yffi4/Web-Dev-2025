function pow(x, n){
    for(; n > 0; n--){
        x *= x;
    }
    return x;
}
