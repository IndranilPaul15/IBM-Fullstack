// Problem 3: Generate Multiplication Table
function generateTable(num, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
generateTable(5, 10);

