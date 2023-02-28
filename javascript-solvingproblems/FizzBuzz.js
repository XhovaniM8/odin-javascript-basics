// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
// However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
// For numbers which are multiples of both three and five print FizzBuzz.

// Get User's Input
const userInputAsString = prompt("Input a number larger than 1...")

// Convert the string to an integer using parseInt()
const userInput = parseInt(userInputAsString);

// Print from '1' to 'userInput'
for (let i = 1; i <= userInput; i++) {

    // Otherwise print the current number
    console.log(i);

    // Multiples of three print Fizz instead of the number
    if (i % 3 === 0)
    {
        console.log("Fizz");
    }

    // Multiples of five print Buzz instead of the number
    if (i % 5 === 0)
    {
        console.log("Buzz");
    }

    // Numbers which are multiples of both three and five print FizzBuzz.
    if (i % 3 === 0 && i % 5 === 0)
    {
        console.log("FizzBuzz");
    }

}

