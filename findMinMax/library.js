'use strict'

function findMinMax(numbersArray) {
	/*Finds minimum and maximum number in an array*/
	/*Checks if input is an array of number(s)*/
	if (!Array.isArray(numbersArray) || numbersArray.length===0) {
		return "ValueError, array of numbers is expected";
	}
	/*Initialises min and max number to first item of array*/
	let [min, max] = [numbersArray[0], numbersArray[0]]
	/*Initialises arrIndex to 1*/
	let arrIndex = 1;
	/*while arrIndex is less than array length, check if the value at arrIndex is lower than the min
	or higher than the max, if it is reassign min/max to the value*/
	while (arrIndex < numbersArray.length) {
		if (numbersArray[arrIndex] > max) {
			max = numbersArray[arrIndex];
		}
		if (numbersArray[arrIndex] < min) {
			min = numbersArray[arrIndex];
		}
		arrIndex+=1;
	}
	/*if min and max are equal, return only one*/
	if (min===max) {
		return [min];
	}
	/*return an array of min and max*/
	return [min, max];
}
module.exports = findMinMax;