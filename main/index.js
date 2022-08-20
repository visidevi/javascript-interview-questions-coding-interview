const data = [
  {
    id: 40,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    active: true,
  },
  {
    id: 20,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    active: true,
  },
  {
    id: 30,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    active: true,
  },
];

const getFirstsName = () => {
  /** Sort mutate the array itself */
  return data
    .sort((a, b) => (a.id < b.id ? -1 : 1))
    .filter((user) => user.active)
    .map((user) => user.first_name);
};

console.log(`getFirstsName():------>`, getFirstsName());


/**
 * Difference between null and undefined
 * There is not such type as null , null is an object
 * Undefined: Value no assigned
 * null: object
 * There is not something better, the team can decide..
 */

let a;
console.log("a", "value:", a ,"type:",typeof a)
a = null;
console.log("a", "value:", a ,"type:",typeof a)