const findSum = function(array) {
};
// Function to find the sum of all numbers in an array
    // Return a value of the sum of all array item values using .reduce
  return array.reduce(
      (a,c) => a+c, 0
  );
};

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

const isPalindrome = function(str) {
    // Convert original string to lowercase
    str = str.toLowerCase()

    // Declare new variable that results in reverse of orig string. Converts the string to an array, reverse it, and then join it back into a string 
    let reversedStr = str.split('').reverse().join('');

    // Compare the original string and reversed string 
    return str === reversedStr;
};

const largestPair = function(array) {
    return array.reduce((max, curr, i) => {
        if (i > 0 && curr * array[i - 1] > max) {
            return curr * array[i - 1];
        }
        return max;
    }, 0);
};

const removeParenth = function(str) {
    // Remove the content inside parentheses
    let newSentence = sentence.replace(/\([^)]*\)/g, '');

    return newSentence;
};

const scoreScrabble = function(str) {
function convertToLetterScoring(data) {
    // Use reduce to iterate over each line and build our letter scoring object
    return data.trim().split('\n').reduce((letterScoring, line) => {
        // Destructure the line into score and letters
        // The split('-') creates an array with two elements: the score and the letters string
        const [score, letters] = line.split('-');

        // Convert score to number and trim whitespace
        const scoreValue = parseInt(score.trim());
    
        // Split letters, trim whitespace, and convert to uppercase
        letters.split(',').forEach(letter => {
            // Trim whitespace, convert to uppercase, and add to our scoring object
            // This ensures consistency in our keys (all uppercase, no whitespace)
            letterScoring[letter.trim().toUpperCase()] = scoreValue;
        });
    
        // Return the updated letterScoring object for the next iteration
        return letterScoring;
    }, {}); // Initialize with an empty object
}

// Input data: multiline string (letter scoring data) where each line represents a score and its corresponding letters
const scoringData = `
1 - a, e, i, o, u, l, n, r, s, t
2 - d, g
3 - b, c, m, p
4 - f, h, v, w, y
5 - k
8 - j, x
10 - q, z
`;

// Execute our function with the input data
const letterScoring = convertToLetterScoring(scoringData);

// Function to calculate Scrabble score for a word
const scoreScrabble = function(str) {
    // Initialize total score for this word
    let totalScore = 0;
    
    // Convert each character to upper case to match scoring data letters
    for (const char of str.toUpperCase()){
        // Look up the score for the character, default to 0 if not found
        const charScore = letterScoring[char] || 0;

        // Add the character's score to the total
        totalScore += charScore;
    }

    // Return the final score for the word
    return totalScore;     
};
