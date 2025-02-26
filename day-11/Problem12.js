// Extract numbers, sum them, and replace them with their sum
function sumNumbersInString(str) {
    let sum = 0;
    let modifiedStr = str.replace(/\d+/g, match => {
        sum += Number(match);
        return "";
    });
    return modifiedStr + sum;
}
console.log(sumNumbersInString("abc123xyz45pq7"));