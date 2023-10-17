'use strict';

const reverseWordsInSentence = function (sentence) {
	// Split the sentence into words using space as the delimiter
	const words = sentence.split(' ');

	// Reverse each word and create an array of reversed words
	const reversedWords = words.map((word) =>
		word.split('').reverse().join('')
	);

	// Join the reversed words to form the reversed sentence
	const reversedSentence = reversedWords.join(' ');

	return reversedSentence;
};

const inputSentence = 'This is a sunny day';
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
