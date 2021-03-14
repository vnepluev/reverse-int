module.exports = function reverse (n) {
    let result = '' + n;
    
    if (n < 0) {
        result = Math.abs(n) + '';
    }
    
    result = result.split('').reverse().join('');

    return result;
}
