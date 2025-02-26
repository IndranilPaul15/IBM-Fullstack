// Find the most frequent element in an array
function mostFrequentElement(arr) {
    let frequency = {};
    let maxElement = arr[0], maxCount = 0;
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            maxElement = num;
        }
    }
    return maxElement;
}
console.log(mostFrequentElement([1, 3, 2, 3, 4, 1, 3, 2, 3, 5]));