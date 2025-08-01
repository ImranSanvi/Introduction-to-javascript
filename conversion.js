var orangePrice = 200;
console.log(orangePrice);

var applePrice = '150';
console.log(applePrice);

//string to int
applePrice = parseInt(applePrice);
console.log( typeof applePrice)

//string to Float
var number = parseFloat('42.56');
console.log(number)

//string to boolean
var b = Boolean(applePrice);
console.log(typeof b);

// integer to float
var x = 10;
console.log(x);
var y = parseFloat(x);
console.log(y.toFixed(4));

// Float to integer
var a = 123.456
var c = parseInt(a);
console.log(c);

// integer to string
var p = 256;
var q = String(p);
console.log(q + " Type is " + typeof(q));

var r = 128.435;
var s = String(r);
console.log(s + " Type is " + typeof(s));
