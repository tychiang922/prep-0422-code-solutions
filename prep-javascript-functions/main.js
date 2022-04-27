// Add Two Numbers
function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

// Convert Hours to Minutes Function
function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

// Get Greeting Function
function getGreeting(name) {
  return '"Hello ' + name + '!"';
}

var greeting = getGreeting('World');
console.log(greeting);

// Add and Multiply by 5
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addmult5 = addAndMultiplyBy5(10, 5);
console.log(addmult5);

// Multiply and Divide by 5
function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var multdiv5 = multiplyAndDivideBy5(35, 10);
console.log(multdiv5);

// Subtract Two Numbers
function subtractTwoNumbers(x, y) {
  return (x - y);
}

var subTwoNum = subtractTwoNumbers(22, 7);
console.log(subTwoNum);

// getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circlecircumference = getCircleCircumference(5);
console.log(circlecircumference);

// Get Full Name
function getFullname(firstName, lastName) {
  return '"' + firstName + ' ' + lastName + '"';
}

var fullname = getFullname('Juan', 'Ramirez');
console.log(fullname);

// Cube
function cube(x) {
  return x * x * x;
}

var cubing = cube(5);
console.log(cubing);
