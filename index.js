// Sub optimal code: This uses Typescripts 'representation' of what an 'Object Type' looks like, 
//   to help Javascript understand the objects you're workign with
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'cpdev',
//   age: 31
// };
// console.log(person.name);
// Optimal, using Type Inference.
var person2 = {
    name: 'cpdev2',
    age: 31,
    hobbies: ['coding', 'BDO', 'pen spinning'] // Typescript infers 'string[]'
};
var favoriteActivities; // You can explicitly declare a variable and give it the Type Array full of strings: string[]
favoriteActivities = ['magnets', 'people\'s knees'];
// console.log(person2.name);
console.log(favoriteActivities);
