function firstNonRepeatedChar(str) {
 // Write your code here
	 // Create a map to store the frequency of each character.
  const charCounts = new Map();

  // First, iterate through the string to count the occurrences of each character.
  for (const char of str) {
    // If the character is already in the map, increment its count. Otherwise, add it with a count of 1.
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  // Next, iterate through the string again, in order, to find the first character
  // with a count of exactly 1.
  for (const char of str) {
    if (charCounts.get(char) === 1) {
      // This is the first character that only appeared once.
      return char;
    }
  }

  // If the loop finishes and no character with a count of 1 was found,
  // it means all characters are repeated or the string is empty.
  return null;
  }

  // If the outer loop completes, no non-repeated character was found.
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
