// app.js

let numbers = process.argv.slice(2).map(Number);

let sum = 0;
let smallest = numbers[0];
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }

    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

let average = sum / numbers.length;

console.log("Numbers :", numbers);
console.log("Sum :", sum);
console.log("Average :", average);
console.log("Smallest :", smallest);
console.log("Largest :", largest);