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
console.log("a", "value:", a, "type:", typeof a);
a = null;
console.dir("a", "value:", a, "type:", typeof a);

const closure = () => {
  let counter = 0;
  return {
    increment: () => {
      return counter++;
    },
    getValue: () => {
      return counter;
    },
  };
};

const count = closure();
count.increment();
count.increment();
count.increment();
console.log(count.increment(), count.getValue());
console.dir(closure());
const hoisting = 1;

const privateSecret = () => {
  const secret = "foo";
  return () => secret;
};
const getSecret = privateSecret();
console.log(getSecret());

/**
 * Currying
 */

// const multiply = num1 => {
//   return num2 => {
//     console.log(num1, "num1")
//     return num2*num1
//   }
// }
const multiply = (num1) => (num2) => (num3) => num2 * num1 + num3;
console.log(multiply(2)(3)(2), "multiply(2)(3)");

/**
 * Push Array
 */

const numbers = [1, 2];
const append = (arr, el) => {
  return [...arr, el];
};

const newNumbers = append(numbers, 3);
console.log(numbers);
console.log(newNumbers);

/**
 * Concatenate two arrays
 *
 */

const mergeArrays = (arr1, arr2) => {
  // return [...arr1, ...arr2]
  return [...arr1, ...arr2];
};
console.log([1, 12], [2, 3, 4]);

/**
 * Find Slima
 */

const findName = (name, arr) => arr.some((a) => name === a.first_name);
console.log(findName("Michael", data), "SOME");

const duplicate = [1, 2, 2, 2, 3, 4, 5, 5];
console.log([...new Set(duplicate)]);

/**
 * Sort array
 *
 */

const arrS = [5, 4, 3, 2];
const result = arrS.sort((a, b) => a + b);
console.log(result);

/**
 * Range
 */

const range = (start = 0, end = 0) => {
  return [...Array(end).keys()].map((el) => el + start);
};
console.log(range(0, 20));

/**
 * Shuffle */
const shuffle = (items) => {
  return items
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);
};

console.log(shuffle([2, 1, 4]));


/**
 * Min Value
 * 
 */


 const getMinVal = (arr) => {
  const minValue = Math.min(...arr)
  const minArr = arr.filter(el => el === minValue)
  return {
    minArr,
    minValue
  }
}
// console.log(getMinVal([100,002000,33,4,3,33]))


/**
 * Value of this
 */

const valueOfThis = () => {
  console.log(this, "valueOfThis")
  return {
    title: "Foo",
    geObjectValue () {
      function name() {
        console.log(this, "Name")
      }
      console.log(this, "geObjectValue")
      name()
    }
  }
}
valueOfThis().geObjectValue()

class Item {
  title = "Foo"
  getItem() {

    const this_ =  this;
    [1, 2, 4].map(function (i) {
      console.log(i, this_, "this arrow")

    });
    // Better approach use arrow function instead of function keyword
    [1, 2, 4].map((te)  => {
      console.log(te, this, "this arrow function get the context from the parent")
      
    })
    function name() {
      console.log(this, "Name")
    }
    console.log(this, "geObjectValue")
    name()
  }
}

const item = new Item()
item.getItem()

