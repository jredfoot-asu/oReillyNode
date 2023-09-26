const person = {
    name: 'Jason',
    age: 40,
    hasHobbies: true,
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

// const printName = (personData) => {
//     console.log(personData.name);
// }

// object destructuring
const printName = ({ name, age }) => {
    console.log(name, age);
}

printName(person)

const { name, age } = person;
console.log(name, age);

// Array destructuring
const hobbies = ['Sports', 'Programming'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);