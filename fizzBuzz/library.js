function fizzBuzz(n) {
  /*Check if number is an integer and greater than 0*/ 
  if (!Number.isInteger(n) || n < 0) {
    return "ValueError, Positive Integer input required"
  }
  /*if number is 0 return 0*/
  if (n === 0) {
    return 0;
  }
  /*initialise fizz_buzz to an empty string*/
  let fizz_buzz = '';
  /*if number is divisible by 3, add 'Fizz'*/
  if (n % 3 === 0) {
    fizz_buzz+='Fizz';
  }
  /*if number is divisible by 5, add 'Buzz'*/
  if (n % 5 === 0) {
    fizz_buzz+='Buzz';
  }
  /*If fizz_buzz is truthy(not empty), return fizz_buzz*/ 
  if (fizz_buzz) {
    return fizz_buzz;
  }
  /*else return the number*/
  else {
    return n;
  }
}
module.exports = fizzBuzz;