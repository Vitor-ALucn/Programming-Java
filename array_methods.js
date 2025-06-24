// Example array to demostrate array methods
const arr = [1, 2, 3, 4, 5];

arr.push(6); // Adds 6 to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

arr.pop(); // Removes the last element (6)
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.shift(); // Removes the first element (1)
console.log(arr); // Output: [2, 3, 4, 5]

arr.unshift(1); // Adds 1 to the beginning of the array
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.concat([6, 7]); // Concatenates [6, 7] to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5] (concat does not modify the original array)

arr.slice(1, 3); // Returns a new array with elements from index 1 to 2 (not including index 3)
console.log(arr.slice(1, 3)); // Output: [2, 3]

arr.splice(1, 2); // Removes 2 elements starting from index 1
console.log(arr); // Output: [1, 4, 5] (removes elements 2 and 3)

arr.reverse(); // Reverses the order of the array
console.log(arr); // Output: [5, 4, 1]

arr.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(arr); // Output: [1, 4, 5]

arr.indexOf(4); // Returns the index of the first occurrence of 4
console.log(arr.indexOf(4)); // Output: 1

arr.includes(5); // Checks if 5 is in the array
console.log(arr.includes(5)); // Output: true

arr.finds(x => x > 3); // Finds the first element greater than 3
console.log(arr.find(x => x > 3)); // Output: 4

arr.filter(x => x > 3); // Filters elements greater than 3 
console.log(arr.filter(x => x > 3)); // Output: [4, 5]

arr.map(x => x * 2); // Maps each element to its double
console.log(arr.map(x => x * 2)); // Output: [2, 8, 10]

arr.reduce((sum, x) => sum + x, 0); // Reduces the array to the sum of its elements
console.log(arr.reduce((sum, x) => sum + x, 0)); // Output : 10 (1 + 4 + 5)

arr.join('-'); // Joins the array elements into a string with '-' as separator
console.log(arr.join('-')); // Output: "1-4-5"

arr.every(x => x > 2); // Checks if all elements are greater than 2
console.log(arr.every(x => x > 2)); // Output: false (1 is not greater than 2)

arr.some(x => x > 4); // Checks if some elements are greater than 4
console.log(arr.some(x => x > 4)); // Output: true (5 is greater

arr.findeIndex(x => x > 4); // Finds the index of the first element greater than 4
console.log(arr.findIndex(x => x > 4)); // Output: 2 (index of 5)

arr.fill(9); // Fills the array with 9
console.log(arr); // Output: [9, 9, 9]

arr.copyWithin(0, 1); // Copies elements from index 1 to index 0
console.log(arr); // Output: [9, 9, 9] (no change since all elements are 9)

arr.flatMap(x => [x, x * 2]); // Maps each element to an array of itself and its double
console.log(arr.flatMap(x => [x, x * 2])); // Output: [9, 18, 9, 18, 9, 18]

arr.entries(); // Returns an iterator of key/value pairs for each index and value
for (const [index, value] of arr.entries()) {
    console.log(`${index}: ${value}`); // Output: "0: 9", "1: 9", "2: 9"
}

arr.keys(); // Returns an iterator of keys (indices) of the array
for (const key of arr.keys()) {
    console.log(key); // Output: 0, 1, 2
}   

arr.values(); // Returns an iterator of values of the array
for (const value of arr.values()) {
    console.log(value); // Output: 9, 9, 9
}   

arr.toString(); // Converts the array to a string
console.log(arr.toString()); // Output: "9,9,9"