//javascript sort function behave as an string sorting

let names = ['shakib', 'kevin', 'rahim', 'marnus', 'steven', 'anjoly'];
names.sort();
console.log(names); // 'anjoly', 'kevin', 'marnus', 'rahim', 'shakib', 'steven'

let numbers = [12, 35, 27, 18, 44, 32, 100];
numbers.sort();
console.log(numbers); // 100, 12, 18, 27, 32, 35, 44

//sorting in ascending order
numbers.sort( function(a, b) {return a-b});
console.log(numbers);

//sorting in descending order
numbers.sort( function(a, b) {return b-a});
console.log(numbers);
