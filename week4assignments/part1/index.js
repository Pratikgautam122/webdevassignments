// Question 1
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is an even number.");
    } else {
        console.log(num + " is an odd number.");
    }
}

checkEvenOdd(7);
checkEvenOdd(8);

// Question 2
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

multiplicationTable(5);

// Question 3
function fizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

// Question 4
function printTriangle(n) {
    let stars = "";
    for (let i = 1; i <= n; i++) {
        stars += "*";
        console.log(stars);
    }
}

printTriangle(5);
