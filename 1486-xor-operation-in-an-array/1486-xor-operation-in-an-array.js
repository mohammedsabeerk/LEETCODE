/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result=0

    for ( let i=0; i< n; i++){
        const currentNumber=start + 2*i;

        result^=currentNumber
    }
    return result
    
};