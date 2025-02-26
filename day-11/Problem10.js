// Problem 10: Find Pairs that Sum to Target
function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) pairs.push([arr[i], arr[j]]);
        }
    }
    return pairs;
}
console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));