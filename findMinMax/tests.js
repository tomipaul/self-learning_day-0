  'use strict';
  
  const findMinMax = require('./library.js');

  describe('Min-Max Numbers in an Array: ', function () {

    describe('Accept an array of numbers and output an array of number(s)', function () {

      it("should produce an error message if input is not an array", function() {
        expect(findMinMax("I'm a string")).toEqual("ValueError, array of numbers is expected");
      });

      it("should produce an error message if array input is empty", function() {
        expect(findMinMax([])).toEqual("ValueError, array of numbers is expected");
      });

      it ('should return an array', function() {
        expect(Array.isArray(findMinMax([6, 1, 5, 9]))).toBe(true, 'function should return an array');
      });

    });

    describe('Return the min and max number in the array in a new array as follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [-8, -2] for [-2, -3, -4, -5, -6, -7, -8]', function () {
        expect(findMinMax([-2, -3, -4, -5, -6, -7, -8])).toEqual([-8, -2]);
      });

      it('should return [4.52, 4.59] for [4.52, 4.53, 4.54, 4.55, 4.56, 4.57, 4.58, 4.59]', function() {
        expect(findMinMax([4.52, 4.53, 4.54, 4.55, 4.56, 4.57, 4.58, 4.59])).toEqual([4.52, 4.59]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it("should not return [4, 4] for [4, 4, 4, 4]", function() {
        expect(findMinMax([4, 4, 4, 4])).not.toEqual([4, 4]);
      });

      it('should return [4] for [4, 4, 4, 4]', function() {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [-8, 8] for [8, -8]', function() {
        expect(findMinMax([8,-8])).toEqual([-8, 8]);
      });

    });
  });