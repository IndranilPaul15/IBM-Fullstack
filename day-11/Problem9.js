// Problem 9: First Non-Repeating Character
function firstUniqueCharacter(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) return char;
    }
    return null;
}
console.log(firstUniqueCharacter("aabbcddce"));