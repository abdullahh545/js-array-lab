/*
Task 1: Create an empty array

- Declare an empty array and assign it to a variable named `foodList`.

Task 1 is done for you:
*/

let foodList = [];

console.log('Task 1 output:', foodList);

/*
Task 2: Add items to the array

- Add 'pizza' and 'cheeseburger' to the `foodList` array, in that order.

Complete Task 2 below:
*/

foodList.push('pizza');
foodList.push('cheeseburger');

console.log('Task 2 output:', foodList);

/*
Task 3: Add to the start

- Add 'taco' to the start of the `foodList` array.

Complete Task 3 below:
*/

foodList.unshift('taco');

console.log('Task 3 output:', foodList);

/*
Task 4: Get an array element

- Get the value 'pizza' from the array by its index.
- Store it in a variable called `favoriteFood`.

Complete Task 4 below:
*/

let favoriteFood = foodList[1];

console.log('Task 4 output:', favoriteFood);

/*
Task 5: Insert between elements

- Insert 'tofu' between 'pizza' and 'cheeseburger'.

Complete Task 5 below:
*/

foodList.splice(2, 0, 'tofu');

console.log('Task 5 output:', foodList);

/*
Task 6: Replace an item

- Replace 'pizza' with 'sushi' and 'cupcake'.

Complete Task 6 below:
*/

foodList.splice(1, 1, 'sushi', 'cupcake');

console.log('Task 6 output:', foodList);

/*
Task 7: Use slice()

- Use slice to make a new array with 'sushi' and 'cupcake'.
- Store it in `delicious`.

Complete Task 7 below:
*/

const delicious = foodList.slice(1, 3);

console.log('Task 7 output:', delicious);

/*
Task 8: Find index

- Use indexOf to find the index of 'tofu' in `foodList`.
- Store it in `tofuIndex`.

Complete Task 8 below:
*/

let tofuIndex = foodList.indexOf('tofu');

console.log('Task 8 output:', tofuIndex);

/*
Task 9: Join array

- Use join to make a string from `foodList` with ' -> ' between items.
- Store it in `foodString`.

Complete Task 9 below:
*/

let foodString = foodList.join(' -> ');

console.log('Task 9 output:', foodString);

/*
Task 10: Check for an item

- Use includes to check if 'soup' is in `foodList`.
- Store result in `containsSoup`.

Complete Task 10 below:
*/

let containsSoup = foodList.includes('soup');

console.log('Task 10 output:', containsSoup);

/*
Task 11: Get odd numbers

- Loop through `numbers` and push odd numbers to `oddNumbers`.

Complete Task 11 below:
*/

const numbers = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
let oddNumbers = [];

numbers.forEach(n => {
    if (n % 2 !== 0) oddNumbers.push(n);
});

console.log('Task 11 output:', oddNumbers);

/*
Task 12: FizzBuzz arrays

- Loop through `numbers` and:
  - If divisible by 3, push to `fizzArr`.
  - If divisible by 5, push to `buzzArr`.
  - If divisible by both, push to `fizzbuzzArr`.

Complete Task 12 below:
*/

const fizzArr = [];
const buzzArr = [];
const fizzbuzzArr = [];

numbers.forEach(n => {
    if (n % 3 === 0 && n % 5 === 0) fizzbuzzArr.push(n);
    if (n % 3 === 0) fizzArr.push(n);
    if (n % 5 === 0) buzzArr.push(n);
});

console.log('Task 12 output:');
console.log('  fizzArr:', fizzArr);
console.log('  buzzArr:', buzzArr);
console.log('  fizzbuzzArr:', fizzbuzzArr);

/*
Task 13: Last nested array

- Assign the last array in `numberGroups` to `lastGroup`.

Complete Task 13 below:
*/

const numberGroups = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

let lastGroup = numberGroups[numberGroups.length - 1];

console.log('Task 13 output:', lastGroup);

/*
Task 14: Get a value from nested arrays

- Get the number 66 from `numberGroups` and store in `sixtySix`.

Complete Task 14 below:
*/

let sixtySix = numberGroups[2][1];

console.log('Task 14 output:', sixtySix);

/*
Task 15: Sum all numbers in nested arrays

- Use nested loops to sum all numbers in `numberGroups`.
- Store sum in `sumTotal`.

Complete Task 15 below:
*/

let sumTotal = 0;
numberGroups.forEach(arr => {
    arr.forEach(val => {
        sumTotal += val;
    });
});

console.log('Task 15 output:', sumTotal);