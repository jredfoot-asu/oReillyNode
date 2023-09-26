const name = 'Jason';
let age = 29;
const hasHobbies = true;

console.log(name, age, hasHobbies);

age = 30

// function summarizeUser (userName, userAge, userHasHobby) {
//     return (`Name is ${userName}, age is ${userAge}, and the user has hobbies: ${userHasHobby}`)
// };

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (`Name is ${userName}, age is ${userAge}, and the user has hobbies: ${userHasHobby}`)
}

const add = (a, b) => a + b;
const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;
console.log(addRandom());
console.log(addOne(1));
console.log(add(1, 2));

console.log(summarizeUser(name, age, hasHobbies));
