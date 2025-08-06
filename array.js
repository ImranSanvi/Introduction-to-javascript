let numbers = [75.25, 65, 80, 35.45, 99.50];

// // array size
let size = numbers.length;
console.log("Size of array is : ", size);

// // print array element
for (let i=0; i<size; i++){
    console.log(numbers[i]);
}
console.log(numbers.join(" "));//print elemens in one line

// // push(always back) element in the array
numbers.push(1);
numbers.push(88);
console.log(numbers.join(" "));

// // pop(always back) element from array
numbers.pop()
console.log(numbers.join(" "));

// // insert and delete in specific index
numbers.splice(2, 0, 1000);
console.log(numbers.join(" "));

// remove from first
let removed = numbers.shift();
console.log(numbers);

// delete element
numbers.splice(3, 1);
console.log(numbers.join(" "));

// check the the number is include 
console.log(numbers.includes(88))//false

// push : insert at last
// pop : delete from last
// shift : delete from first
// unshift : insert at first

// reverse array
numbers.reverse();
console.log(numbers);

// 2D array
let marks = [
    [87, 66, 78, 90, 88],
    [83, 66, 85, 70, 78],
    [75, 66, 78, 70, 67],
    [87, 75, 78, 90, 98]
]
console.log(marks);
console.log(marks[0][0]);

