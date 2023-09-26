const person = {
    name: 'Jason',
    age: 40,
    hasHobbies: true,
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

person.greet()

const hobbies = ['Sports', 'Reading']
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
console.log(hobbies.map(hobby => "Hobby: " + hobby))
console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);

// spread = copies plus changes
const copiedArray = hobbies.slice();
console.log(copiedArray);
const copiedArray1 = [...hobbies]
console.log(copiedArray1);

// rest = opposite of spread
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]
}

console.log(toArray(1, 2, 3));

const toArray1 = (...args) => {
    return args
}
console.log(toArray1(1, 2, 3, 4, 5));