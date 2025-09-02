function firstNonRepeatedChar(str) {
 // Write your code here
 //Creating a map to store frequency of elements
	let charFreqCount = {};
	//loop through character of the string
	for(let char of str){
        charFreqCount[char] = (charFreqCount[char]||0)+1;
	}
	for(let char of str){
		if(charFreqCount[char]===1) return char;
	}
	return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
