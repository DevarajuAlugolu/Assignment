'use strict';
const calculation = document.getElementById('calculation');
const result = document.getElementById('result');

const ac = document.getElementById('ac');
const operators = document.getElementsByClassName('operator');
const equals = document.getElementById('equals');
const numbers = document.getElementsByClassName('number');
const period = document.getElementById('period');

ac.addEventListener('click', erase);
equals.addEventListener('click', getResult);
period.addEventListener('click', modifyCurrentCalculation);

for (let i = 0, n = operators.length; i < n; i++) {
	operators[i].addEventListener('click', modifyCurrentCalculation);
}

for (let i = 0, n = numbers.length; i < n; i++) {
	numbers[i].addEventListener('click', modifyCurrentCalculation);
}

let currentCalculation = '';
let showCalculation = '';
let currentNumber = '';
let previousResult = '';
let lastPress = '';

function erase() {
	currentCalculation = '';
	showCalculation = '';
	currentNumber = '';
	previousResult = '';
	lastPress = 'erase';
	result.innerHTML = '0';
	calculation.innerHTML = '0';
}

function getResult() {
	currentNumber = '';
	lastPress = 'result';
	previousResult = eval(currentCalculation);
	currentCalculation = previousResult;
	showCalculation = previousResult;
	result.innerHTML = parseFloat(previousResult.toFixed(11));
}

function modifyCurrentCalculation(event) {
	if (lastPress === 'result' && event.target.className === 'number') {
		erase();
	} else if (
		lastPress === 'operator' &&
		event.target.className === 'greykey operator'
	) {
		currentCalculation = currentCalculation.slice(0, -1);
		showCalculation = showCalculation.slice(0, -1);
	} else if (
		currentCalculation === '' &&
		event.target.className === 'greykey operator' &&
		event.target.id !== 'subtract'
	) {
		return;
	}

	if (event.target.className === 'number' || event.target.id === 'zero') {
		lastPress = 'number';
		currentNumber += event.target.innerHTML;
		result.innerHTML = currentNumber;
	}

	if (event.target.id === 'period') {
		if (currentNumber.indexOf('.') < 0) {
			lastPress = 'period';
			currentNumber += event.target.innerHTML;
			result.innerHTML = currentNumber;
		}
	}

	if (event.target.className === 'greykey operator') {
		lastPress = 'operator';
		currentNumber = '';
		result.innerHTML = event.target.innerHTML;
	}
	if (event.target.id === 'multiply') {
		currentCalculation += '*';
	} else {
		currentCalculation += event.target.innerHTML;
	}

	showCalculation += event.target.innerHTML;
	calculation.innerHTML = showCalculation;
}
