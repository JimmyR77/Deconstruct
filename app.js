let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let {numPlanets, yearNeptuneDiscovered} = facts;

//returns {numPlanets: 8, yearNeptuneDiscovered: 1846}

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

//{numPlanets: 8, yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
//returns {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // ?
//returns
("Your name is Alejandro and you like purple");

//Array Destructuring

let [first, second, third] = ["Maya", "Marisa", "Chi"];
//returns Maya
//returns Marisa
//returns Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

//returns  "Raindrops on roses"

//returns "whiskers on kittens"

//returns ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

//returns  [10, 30, 20]

//ES2015 Refactoring
const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

//ES2015Array Swap
let arr = [1, 2];
let temp = arr[0];

// [temp] = [arr];
[arr[0], arr[1]] = [arr[1], arr[0]];



// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// const raceResults = ([first,second,third,...rest]) => ({first, second, third, rest})



// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))
