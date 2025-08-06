
let person = {
    name : 'Imran Mohammed',
    age : 25,
    isStudent : true,
    department : 'Computer science and engineering'
};
console.log(person);

// accessing values
console.log(person.name);
console.log(person["age"]);

// modifying values
person.isStudent = false;
console.log(person);

// adding properties
person.city = "Chattogram";
console.log(person);

// deleting properties
delete person.isStudent;
console.log(person);

// looping through the object
for(key in person){
    console.log( key +" : " + person[key])
}


// nested object with method
let employee = {
    name : 'asif',
    email : 'asif1456@email.com',
    address : {
        division : 'Chattogram',
        district : 'bandarban'
    },
    greet(){
        console.log('Hello world');
    }
};

console.log(employee);
console.log(employee.address.division)
employee.greet();

// array of object
let students = [
    {name : 'fardin' , department:"CSE", year:4},
    {name : 'abedin' , department:"CSE", year:3},
    {name : 'maldin' , department:"EEE", year:4},
]
console.log(students);
console.log(students[1]);
console.log(students[2].department)
