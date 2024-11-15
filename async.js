
// Object destructuring
const person = {
    name: "Tobi",
    age: 55,
    department: "Architecture"
}

const {age, name, department: dept} = person;

// alias department as dept
console.log(age);
console.log(dept);


// array destructuring
const arr = [12, 45, 56];
const [i, j, k] = arr;
console.log(i);
