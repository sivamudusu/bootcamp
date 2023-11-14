let persons = [
  // created one array of person object
  {
    name: "shiva",
    age: 27,
    address: "jubli hills",
  },
  {
    name: "pathak",
    age: 26,
    address: "indra prasth",
  },
  {
    name: "gitesh",
    age: 27,
    address: "Banjara hills",
  },
  {
    name: "hussein",
    age: 26,
    address: "madhapur",
  },
];

persons[2].address = "Ayyyapa society"; //changing the addres of one object in persons array

let personCopy = persons;
console.log(personCopy[2].address); // checking the same object address in copy of original array
