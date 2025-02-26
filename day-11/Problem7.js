// Problem 7: Find the Longest Word in a Sentence
function longestWord(sentence) {
    return sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
console.log(longestWord("Coding is amazing and challenging"));