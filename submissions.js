// Question 1
// Function to find the sum of all numbers in an array
const findSum = function(array) {
    // Return a value of the sum of all array item values using .reduce
    return array.reduce(
        (a,c) => a+c, 0
    );
};

// Question 2
// Function to find the most and least frequent items in an array
const findFrequency = function(array) {
    let counts = {}

    array.forEach((letter) => {
        if (counts[letter]){
            counts[letter]++;
        } else {
            counts[letter] = 1;
        }
    });
// Now find the most and least frequent
    let most = array[0]
    let least = array[0]

    for (let letter in counts) {
        if(counts[letter] > counts[most]) {
            most = letter;
        }
        if(counts[letter] < counts[least]) {
            least = letter;
        }
    }
    return {most, least}
};


// Question 3
// Function to check if a string is a palindrome
const isPalindrome = function(str) {
    // Convert original string to lowercase
    str = str.toLowerCase()

    // Declare new variable that results in reverse of orig string. Converts the string to an array, reverse it, and then join it back into a string 
    let reversedStr = str.split('').reverse().join('');

    // Compare the original string and reversed string 
    return str === reversedStr;
};

// Question 4
// Function to find the largest product of adjacent elements in an array
const largestPair = function(array) {
    return array.reduce((max, curr, i) => {
        if (i > 0 && curr * array[i - 1] > max) {
            return curr * array[i - 1];
        }
        return max;
    }, 0);
};

// Question 5
// Function to remove text within parentheses from a string
const removeParenth = function(sentence) {
    // Remove the content inside parentheses
    let newSentence = sentence.replace(/\([^)]*\)/g, '');

    return newSentence;
};

// Question 6
// Function to convert letter and score data set string into object containing letter and corresponding score (int) pairs 
const scoreScrabble = function(str) {
    const letterValues = {
        'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
        'D': 2, 'G': 2,
        'B': 3, 'C': 3, 'M': 3, 'P': 3,
        'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
        'K': 5,
        'J': 8, 'X': 8,
        'Q': 10, 'Z': 10
    };

    return str.toUpperCase().split('').reduce((score, char) => {
        return score + (letterValues[char] || 0);
    }, 0);
};
