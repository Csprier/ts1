// Sub optimal code: This uses Typescripts 'representation' of what an 'Object Type' looks like, 
//   to help Javascript understand the objects you're workign with
const person: {
  name: string;
  age: number;
} = {
  name: 'cpdev',
  age: 31
};
console.log(person.name);

// Optimal, using Type Inference.
const person2 = {
  name: 'cpdev2',
  age: 31
};
console.log(person2.name);
