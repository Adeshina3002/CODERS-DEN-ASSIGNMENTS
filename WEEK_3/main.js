// EXERCISES: LEVEL 1

let profile = {
  firstName: 'Adeshina',
  lastName: 'Oladeji',
  country: 'Nigeria',
  city: 'Lagos',
  age: 12,
  isMarried: false,
  year: 2022
}
console.log(typeof profile.firstName)
console.log(typeof profile.lastName);
console.log(typeof profile.country);
console.log(typeof profile.city);
console.log(typeof profile.age);
console.log(typeof profile.isMarried);
console.log(typeof profile.year);

let number = '10'
let num = 10
console.log(typeof number == num)

let floating = '9.8'
console.log(parseInt(floating) == 10)

let value = 20
console.log(value == '20')
console.log(value > 15)
console.log(value == value)

let falcify = 'This is false statement'
console.log(falcify == '')
console.log(falcify == 0)
console.log(falcify == false)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
let lang_1 = 'Python'
let lang_2 = 'Jargon'
console.log(lang_1.length)
console.log(lang_2.length)
console.log(lang_1 === lang_2)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

let year = new Date()
console.log(year.getFullYear(year))
console.log(year.getMonth(year))
console.log(year.getDate(year))
console.log(year.getDay(year))
console.log(year.getHours(year))
console.log(year.getMinutes(year))
console.log(year.getTime(year))

// LEVEL 2

// let base = prompt("Enter base of the triangle");
// let height = prompt('Enter height value of the triangle')
// let areaOfTriangle = base * height
// console.log(areaOfTriangle)

// let a = parseInt(prompt('a'))
// let b = parseInt(prompt('b'))
// let c = parseInt(prompt('c'))
// let perimeter = a + b + c
// console.log(perimeter)

// Get length and width using prompt

// let length = parseInt(prompt('Input length'))
// let width = parseInt(prompt('Input width'))
// let areaOfRectangle = length * width
// console.log(areaOfRectangle)

// let perimeterOf = length + width
// let perimeterOfRectangle = parseInt(2 * perimeterOf)
// console.log(perimeterOfRectangle)

// Get radius using prompt

// const PI = 3.14
// let radius = prompt('Enter radius')
// let areaOfCircle = PI * radius * radius

// console.log(areaOfCircle)

// let circumference = 2 * PI * radius
// console.log(circumference)

// Calculate slope and intercepts
// let y2, x2, m, x
// const y1 = x2 = 0
// let c = prompt('Input value of constant c')

// let equationOfLine_y = ((m * x) + c)
// let givenEquation_y = ((2 * x) - 2)

// To find x-intercept

// m = 2
// x1 = (y1 - c) / m
// console.log(x1)

// To find y-intercept

// y2 = ((2 * x2) - 2)
// console.log(y2)

// slope
// let m_slope = ((y2 - y1) / (x2 - x1));
// console.log(m_slope)

// Find the slope between points

// let x_1, x_2, y_1, y_2
// x_1 = 2
// y_1 = 2
// x_2 = 6
// y_2 = 10

// let m_1 = ((y_2 - y_1) / (x_2 - x_1))

// console.log(m_1)
// console.log(m_slope == m_1)

// calculate the value of b in quadratic equation

let a = -3
let b = ((a ** 2) + (6 * a) + 9)
console.log(b)

// calculate pay of a person using script

let hours = prompt('Enter hours worked')
let ratePerHour = prompt('rate per hour')
let pay = hours * ratePerHour
console.log(pay)

// Length of name
let name = 'Adeshina'
let lengthName = name.length > 7
lengthName
  ? console.log("Your name is long")
  : console.log('Your name is short')

  // comparing both firstname and last name

let firstName = 'Adeshina'
let lastName = 'Oladeji'

firstName.length > lastName.length
  ? console.log(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    )
  : console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}`);

  // age declaration

let myAge = 250
let yourAge = 25
let ageDifference = (250 - 25)
console.log(`I am ${ageDifference} years older than you`)

// age declaration to drive

let birthYear = prompt('Enter your year of birth')
let age = new Date()
let agee = (age.getFullYear() - birthYear)
let underAge = (18 - agee)
  
   agee > 18
  ? console.log(`You are ${agee}. You are old enough to drive`)
  : console.log(`You are ${agee}. You will be allowed to drive after ${underAge} years`)

// Calculate the number of seconds lived
let yearsLived = prompt('Enter number of years lived')
let daysInAYear = 365
let secondsInADay = 60 * 60 * 24
let secondsInYears = yearsLived * daysInAYear * secondsInADay 
console.log(`You lived ${secondsInYears} seconds`)

// Human readable time 
let humanTime = new Date()

console.log(humanTime.getFullYear(), humanTime.getMonth(), humanTime.getDate(), humanTime.getHours(), humanTime.getMinutes())















