// Problem 6: Remove Duplicates from an Array
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let num of arr) {
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));