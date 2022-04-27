const person = {
  firstName: 'Tim',
  lastName: 'Chiang',
  hobby: 'Weightlifting',
  job: 'Student',
  previousJob: 'Research Assistant'
};
console.log(person);

const fullName = ("The person's name is: " + person.firstName + ' ' + person.lastName);
console.log(fullName);

console.log("This person's current job is:", person.job);

console.log("Thie person's previous job is:", person.previousJob);

console.log('The complete person object:', person);
