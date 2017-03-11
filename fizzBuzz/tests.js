const fizzBuzz = require('./library.js')

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    let output = fizzBuzz(3);
    expect(output).toEqual('Fizz');
    expect(typeof output).toBe('string');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    let output = fizzBuzz(5);
    expect(output).toEqual('Buzz');
    expect(typeof output).toBe('string');
  });

  it("should return `FizzBuzz` for 15", function() {
    let output = fizzBuzz(15);
    expect(output).toEqual('FizzBuzz');
    expect(typeof output).toBe('string');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toEqual('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toEqual('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toEqual('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    let output = fizzBuzz(7);
    expect(output).toEqual(7);
    expect(typeof output).toBe('number');
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toEqual(101);
  });

  it("should return 0 for 0 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(0)).toEqual(0);
  });

  it("should return an error message since input is not an integer", function() {
    expect(fizzBuzz("I'm not an Integer")).toBe("ValueError, Positive Integer input required");
  });

  it("should return an error message since input is a negative Integer", function() {
    expect(fizzBuzz("I'm not an Integer")).toBe("ValueError, Positive Integer input required");
  });

});