function bubbleSortDescending(arr) {
	const n = arr.length;

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] < arr[j + 1]) {
				// Swap arr[j] and arr[j + 1]
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
const sortedDescending = bubbleSortDescending(numbers);
console.log(sortedDescending);
