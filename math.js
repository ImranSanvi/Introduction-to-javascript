console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(4.6));  // 5  (nearest integer)
console.log(Math.floor(4.9));  // 4  (always down)
console.log(Math.ceil(4.1));   // 5  (always up)
console.log(Math.trunc(4.9));  // 4  (remove decimal)
console.log(Math.abs(-10));    // 10 (absolute value)

console.log(Math.pow(2, 3));   // 8  (2^3)
console.log(2 ** 3);           // 8  (same with ** operator)
console.log(Math.sqrt(16));    // 4
console.log(Math.cbrt(27));    // 3

console.log(Math.min(3, 7, 1)); // 1
console.log(Math.max(3, 7, 1)); // 7
console.log(Math.random());     // random number 0–1

// Random integer between min & max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // e.g., 7

console.log(Math.log(10));     // natural log (base e)
console.log(Math.log10(100));  // log base 10 → 2
console.log(Math.exp(1));      // e^1 → 2.718...

