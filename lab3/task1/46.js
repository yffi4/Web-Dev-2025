function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key]){
            obj[key] *= 2;
        }
    }
}