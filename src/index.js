module.exports = function reverse(n) {
    n = Math.abs(n);
    let str = n.toString();
    let res = str.split('').reverse().join('').toString();
    return res;
}
