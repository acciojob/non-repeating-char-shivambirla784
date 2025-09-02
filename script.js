function firstNonRepeatedChar(str) {
 // Write your code here
	/ Iterate through each character of the string with an outer loop.
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isRepeated = false;

    // Use an inner loop to check if this character is repeated elsewhere.
    for (let j = 0; j < str.length; j++) {
      // We only care about finding the same character at a *different* index.
      if (i !== j && str[j] === char) {
        isRepeated = true;
        // As soon as we find one repeat, we can stop checking for this character.
        break;
      }
    }

    // If the inner loop finished without finding any repeats, this is our answer.
    if (!isRepeated) {
      return char;
    }
  }

  // If the outer loop completes, no non-repeated character was found.
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
