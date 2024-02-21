// STEP 1 Convert the following highlighted identifiers to Camel Case notation:
// let someMonth
// function theMonth()
// let currentMonth
// let summerMonth
// let myLibraryFunction

// STEP 2 Give me an example of:
//  a numeric literal expression: 58008
//  a string literal expression: "Hi, Zak!"
//  a Boolean literal expression: true
//  a null literal expression: null

// STEP 3 Give me two examples of:
//  let complexExpression = 5 * (5/5) - 5
//  let variableExpression = 58008

// STEP 4 Declare (but do not assign) 9 variables for the following identifiers [Use Camel Casing and Hungarian Notation when naming your identifiers]:
// let strFirstName
// let strLastName
// let strAddress
// let strCity
// let strState
// let intZipCode
// let intYourAge
// let strReferralSource
// let boolMayWeContactYou

// STEP 5 Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables
// let strFirstName = "Matthew"
// let strLastName = "Juleson"
// const strAddress = "123 Home Ave"

// STEP 6 Create a variable; Add a number and a string and display the coerced result in the browser’s console window
// let age = 45
// console.log('Matt is ' + age + ' years old')

// STEP 7 Create two variables; for the first variable, add a Boolean and a string and display the coerced result; for the second variable, add a number and a Boolean and display the coerced result.
// let boolStringVariable = true + ' dat!'
// let numberBooleanVariable = 45 + true
// console.log(boolStringVariable) // true dat!
// console.log(numberBooleanVariable) // 46

// STEP 8 Is the following string literal valid? If not, how would you fix it?
// NO, it's not a literal valid; Fixed by using the `tick` mark above the tab key
// let someString = `Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."`
//console.log(someString)

// STEP 9 Create a variable that produces:
//  let aNullValue = null
//  console.log(aNullValue)

// let undefinedValue
// console.log(undefinedValue)


// STEP 10 Use the unary typeof operator on various literals to return the following types within the console window:

// string = "Hi"
// console.log(typeof (string) )

// number = 58008
// console.log( typeof(number) )

// Boolean = false
// console.log(typeof (Boolean) )

// object = {x:1, y:2}
// console.log(object)

// let notDefined
// console.log(notDefined)

// STEP 11 Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
// alert("Hello " + "Matt Juleson, " + "welcome to the JavaScript class!")

// STEP 12 Declare a variable called name and set it equal to your name. Substitute your name in the previous alert string with the variable instead.
// let name = 'Matt Juleson'
// alert(`Hello ${name}, welcome to the JavaScript class!`)

// STEP 13 Declare a variable called course and set it equal to “JavaScript”. Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
// let name = "Matt Juleson"
// let course = "JavaScript"
// alert(`Hello ${name}, welcome to the ${course} class!`)

// STEP 14 Rework the above string so that a line break is added right before the word “Welcome”.
// let name = "Matt Juleson"
// let course = "JavaScript"
// alert(`Hello ${name}.\nWelcome to the ${course} class!`)

// STEP 15 Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
// let course = "JavaScript"
// let name = prompt("What is your name?")
// alert(`Hello ${name}.\nWelcome to the ${course} class!`)

// STEP 16 Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
// let course = prompt("What course are you taking?");
// let name = prompt("what is your name?");
// alert(`Hello ${name}.\nWelcome to the ${course} class!`)

// STEP 17 Declare a variable called x and assign it a value of 10. Declare a variable called y and assign it a value of 20. Display the sum of those two numbers in the console window.
// let x = 10;
// let y = 20;
// console.log(x + y)

// STEP 18 Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable and display the result in the console window. The result should be 40.
// let x = 20
// console.log(x += 20)

// STEP 19 Declare a variable called x and assign it a value of 20. Multiply and assign 5 to that variable and display the result in the console window. The result should be 100.
// let x = 20
// console.log(x *= 5)

// STEP 20 Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.
// let x = 20 % 3
// console.log(x /= 1)

// STEP 21 Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
// let x = 7
// let y = 10
// console.log(y > x)

// STEP 22 Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
// let x = 7
// let y = 10
// console.log(y <= x && y < x)