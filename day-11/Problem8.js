// Problem 8: Custom .map() Method
function myMap(arr, callback) {
    let result = [];
    for (let i of arr) {
        result.push(callback(i));
    }
    return result;
}
console.log(myMap([1, 2, 3, 4], x => x * 2));