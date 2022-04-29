// DAY 2 EXERCISE: LEVEL 1

let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(3, 5))
console.log(challenge.substring(3, 7))
console.log(challenge.slice(3, 21))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(','))

let giantFirms = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(giantFirms.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let string = "You cannot end a sentence with because because because is a conjunction";
console.log(string.indexOf('because'))
console.log(string.lastIndexOf('because'))
console.log(string.search('because'))

let word = " 30 Days Of JavaScript ";
console.log(word.trim())
console.log(word.startsWith(" 30 Days Of JavaScript "));
console.log(word.endsWith(" 30 Days Of JavaScript "))
console.log(word.match('a'))

let concat_1 = '30 Days Of '
let concat_2 = 'JavaScript'
console.log(concat_1.concat(concat_2))
console.log(word.repeat(2))

// EXERCISE LEVEL 2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

let num = '10'
console.log(typeof num == 10)
console.log(parseInt(num))
let myNum = parseFloat(9.8)
console.log(myNum == 10)
console.log(Math.ceil(myNum))
let lang_1 = 'Python, and jargon'
console.log(lang_1.includes('on'))
let statement = 'I hope this course is not full of jargon'
console.log(statement.includes('jargon'))
let randNum = console.log(Math.floor(Math.random() * 101));
let randNum_1 = 50
console.log(Math.floor(Math.random(randNum_1) * (100 - randNum_1 + 1)) + randNum_1
);
let randNum_2 = console.log(Math.floor(Math.random() * 256))

let progLang = 'JavaScript'
// Check back this question

let compoundNumber = '1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125'
console.log(compoundNumber)

let longString = 'You cannot end a sentence with because because because is a conjunction'
console.log(longString.substr(31, 23))

//EXERCISE LEVEL 3
let loveWord = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(loveWord.split('love').length)

let phraseBecause = 'You cannot end a sentence with because because because is a conjunction'
let becausePhrase = /because/gi
console.log(phraseBecause.match(becausePhrase))


let stringAmount = 'He earns 5000 euro from salary per month, 10000 euro annual bonnus, 15000 euro online courses per month'
let monthlySalary = parseInt(5000)
let annualSalary = Number(10000)
let courseSalary = +(15000)
let totalAnnualIncome = monthlySalary + annualSalary + courseSalary
console.log(totalAnnualIncome)