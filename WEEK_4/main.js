// EXERCISE LEVEL 1
// Q1
// let enterAge = prompt('Enter your age')
// let yearsRemaining = 18 - enterAge
// if (enterAge >= 18) {
//   console.log('You are old enough to drive')
// } else {
//   console.log(`You are left with ${yearsRemaining} years to drive`)
// }

// Q2
// let myAge = prompt('Enter your age')
// let yourAge = prompt('Enter your age')
// let myAgeDifference = myAge - yourAge
// let yourAgeDifference = yourAge - myAge
// if (myAge > yourAge) {
//   console.log(`I am ${myAgeDifference} years older than you`)
// } else {
//   console.log(`You are ${yourAgeDifference} years older than me`)
// }

//Q3 
//using if else
let a = 4
let b = 3
if (a > b) {
  console.log(`${a} is greater than ${b}`)
} else {
  console.log(`${b} is greater than ${a}`)
}

// using ternary operator
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

  //Q4
let number = 10 //prompt('Enter a number')
if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`)
}
 
// LEVEL 2
//Q1
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0 - 49, F

let grades =  100 //prompt(`Enter grade`)
if (grades >= 80 && grades <= 100) {
  console.log(`Your grade is A`)
} else if (grades >= 70 && grades <= 89) {
  console.log(`Your grade is B`)
} else if (grades >= 60 && grades <= 69) {
  console.log(`Your grade is C`)
} else if (grades >= 50 && grades <= 59) {
  console.log(`Your grade is D`)
} else if (grades >= 0 && grades <= 49) {
  console.log(`Your grade is F`)
} else {
  console.log(`No grade`)
}

// Q2 
let userInput = 'November' //prompt('Enter month')
switch (userInput) {
  case 'September':
  case 'October':
  case 'November':
    console.log(`The Season is Autumn`)
    break
  case 'December':
  case 'January':
  case 'February':
    console.log(`The Season is Winter`)
    break
  case 'March':
  case 'April':
  case 'May':
    console.log(`The Season is Spring`)
    break
  case 'June':
  case 'July':
  case 'Aughust':
    console.log(`The Season is Summer`)
} 

//Q3 
let dayInput = 'Tuesday' //prompt('What is the day today?')
switch (dayInput) {
  case 'Saturday':
  case 'Sunday':
    console.log(`${dayInput} is a weekend`)
    break
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log(`${dayInput} is a working day`)
}

// LEVEL 3
// Q1
let userInputMonth = 'June' //prompt('Enter a month')
switch (userInputMonth) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    console.log(`${userInputMonth} has 31 days.`)
    break
  case 'September':
  case 'April':
  case 'June':
  case 'November':
    console.log(`${userInputMonth} has 30 days.`)
    break
  case 'February':
    console.log(`${userInputMonth} has 28 days.`)
}

// Q2
