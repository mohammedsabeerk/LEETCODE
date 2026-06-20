/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let orginalNum = num
    let count = 0
    while (num > 0) {
        let digit = num % 10
        if (orginalNum % digit === 0) {
            count++
        }
        num = Math.floor(num / 10)
    }
    return count
};