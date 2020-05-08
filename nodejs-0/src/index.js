'use strict'

const fibonacci = () => {

    let num1 = 0;
    let num2 = 0;
    let fibo_seq = [];
    
    while(num2 <= 377){

        fibo_seq.push(num2);
        
        num2 = num2 + num1;
        num1 = num2 - num1;
        
        if(num2 === 0){
            num2 = num2 + 1;
        }
    }

    return fibo_seq;
}

const isFibonnaci = (num) => {

    const fibo_seq = fibonacci();
    
    if ( fibo_seq.indexOf(num) !== -1 ) {

        return true;

    } else {

        return false;

    }
}

module.exports = {
    fibonacci,
    isFibonnaci
}
