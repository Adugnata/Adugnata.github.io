// Function 1: max()
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Function 2: maxOfThree()
function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Function 3: isVowel()
function isVowel(char) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

// Function 4: sum()
function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function 5: multiply()
function multiply(numbers) {
    return numbers.reduce((result, num) => result * num, 1);
}

// Function 6: reverse()
function reverse(str) {
    return str.split('').reverse().join('');
}

// Function 7: findLongestWord()
function findLongestWord(words) {
    return Math.max(...words.map(word => word.length));
}

// Function 8: filterLongWords()
function filterLongWords(words, length) {
    return words.filter(word => word.length > length);
}

// Test cases using the myFunctionTest helper function
function myFunctionTest(expected, func) {
    if (expected === func()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}

// Test cases for max(), maxOfThree(), isVowel(), sum(), multiply(), reverse(), findLongestWord(), filterLongWords()
console.log("Expected output of max(20, 10) is 20 and " + myFunctionTest(20, function() { return max(20, 10); }));
console.log("Expected output of max(5, 8) is 8 and " + myFunctionTest(8, function() { return max(5, 8); }));
console.log("Expected output of max(-2, -10) is -2 and " + myFunctionTest(-2, function() { return max(-2, -10); }));

console.log("Expected output of maxOfThree(20, 10, 30) is 30 and " + myFunctionTest(30, function() { return maxOfThree(20, 10, 30); }));
console.log("Expected output of maxOfThree(5, 8, 2) is 8 and " + myFunctionTest(8, function() { return maxOfThree(5, 8, 2); }));
console.log("Expected output of maxOfThree(-2, -10, 0) is 0 and " + myFunctionTest(0, function() { return maxOfThree(-2, -10, 0); }));

console.log("Expected output of isVowel('a') is true and " + myFunctionTest(true, function() { return isVowel('a'); }));
console.log("Expected output of isVowel('B') is false and " + myFunctionTest(false, function() { return isVowel('B'); }));
console.log("Expected output of isVowel('o') is true and " + myFunctionTest(true, function() { return isVowel('o'); }));

console.log("Expected output of sum([1, 2, 3, 4]) is 10 and " + myFunctionTest(10, function() { return sum([1, 2, 3, 4]); }));

console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " + myFunctionTest(24, function() { return multiply([1, 2, 3, 4]); }));

console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " + myFunctionTest('ratset gaj', function() { return reverse('jag testar'); }));

console.log("Expected output of findLongestWord(['apple', 'banana', 'cherry']) is 6 and " + myFunctionTest(6, function() { return findLongestWord(['apple', 'banana', 'cherry']); }));

console.log("Expected output of filterLongWords(['apple', 'banana', 'cherry'], 5) is ['banana', 'cherry'] and " +
    myFunctionTest(['banana', 'cherry'], function() { return filterLongWords(['apple', 'banana', 'cherry'], 5); }));
