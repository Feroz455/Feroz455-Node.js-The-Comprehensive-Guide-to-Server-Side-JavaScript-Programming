const person = {
  name: "Firoz",
  age: 32,
};
// const name = person.name;
//const age = person.age;

const { name, age } = person;
console.log("Name: ", name);
console.log("Age: ", age);

const person2 = ["John", 17];
const [name2, age2] = person2;

console.log("Name: ", name2);
console.log("Age: ", age2);
